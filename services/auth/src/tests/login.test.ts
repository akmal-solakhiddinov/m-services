import { mockDeep } from 'jest-mock-extended';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { generateToken } from '../services/token';
import { detectNewDevice } from '../services/deviceDetection';
import MailService from '../services/email';
import { createSession } from '../services/session';
import { loginService } from '../services/login.service';
import { UserStatus, AccountType } from '@prisma/client';

jest.mock('bcrypt');
jest.mock('../services/token');
jest.mock('../services/deviceDetection');
jest.mock('../services/email');
jest.mock('../services/session.ts');

const prismaMock = mockDeep<PrismaClient>();

jest.mock('@prisma/client', async () => {
  const actual = jest.requireActual('@prisma/client');
  return {
    ...actual,
    prisma: {
      user: {
        findUnique: jest.fn().mockResolvedValue({
          id: 'user-123',
          email: 'test@example.com',
          username: 'testuser',
          password: await bcrypt.hash('testpassword', 10), // Hash password correctly
          isActivated: true,
        }),
      },
      session: {
        create: jest.fn(),
      },
    },
  };
});
// const prisma = new PrismaClient();
describe('loginService', () => {
  beforeEach(async () => {
    await prismaMock.user.create({
      data: {
        id: 'user-123',
        email: 'test@example.com',
        username: 'testuser',
        fullName: 'Test User',
        status: UserStatus.online,
        lastLogin: new Date(),
        password: await bcrypt.hash('testpassword', 10), // Ensure password is hashed
        image: null,
        isActivated: true,
        created: new Date(),
        updated: new Date(),
        deleted: false,
        account: AccountType.public,
      },
    });
  });

  const mockUser = {
    id: 'user-123',
    email: 'test@example.com',
    username: null,
    fullName: 'Test User',
    status: UserStatus.online,
    lastLogin: new Date(),
    password: 'hashed-password',
    image: null,
    isActivated: true,
    created: new Date(),
    updated: new Date(),
    deleted: false,
    account: AccountType.public,
  };

  const mockLoginParams = {
    email: 'test@example.com',
    password: 'password123',
    device: 'Macbook Pro',
    browser: 'Chrome',
    ip: '192.168.1.1',
    expiresAt: new Date(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should log in successfully and return tokens', async () => {
    prismaMock.user.findUnique.mockResolvedValue(mockUser);
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);
    (generateToken as jest.Mock).mockImplementation((payload, type) =>
      type === 'refresh' ? 'mockRefreshToken' : 'mockAccessToken',
    );
    (detectNewDevice as jest.Mock).mockResolvedValue(false);

    const result = await loginService(mockLoginParams);

    expect(result).toEqual({
      user: mockUser,
      refreshToken: 'mockRefreshToken',
      accessToken: 'mockAccessToken',
    });

    expect(bcrypt.compare).toHaveBeenCalledWith(mockLoginParams.password, mockUser.password);
    expect(generateToken).toHaveBeenCalledTimes(2);
    expect(detectNewDevice).toHaveBeenCalledWith(
      mockUser.id,
      mockLoginParams.ip,
      mockLoginParams.browser,
    );
    expect(MailService.sendWarning).not.toHaveBeenCalled();
    expect(createSession).not.toHaveBeenCalled();
  });

  test('should send warning email and create session if a new device is detected', async () => {
    prismaMock.user.findUnique.mockResolvedValue(mockUser);
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);
    (generateToken as jest.Mock).mockReturnValue('mockToken');
    (detectNewDevice as jest.Mock).mockResolvedValue(true);
    (MailService.sendWarning as jest.Mock).mockResolvedValue(undefined);
    (createSession as jest.Mock).mockResolvedValue(undefined);

    const result = await loginService(mockLoginParams);

    expect(MailService.sendWarning).toHaveBeenCalledWith(
      mockUser.email,
      mockUser.id,
      mockLoginParams.ip,
      mockLoginParams.browser,
      mockLoginParams.device,
      expect.anything(), // Location data
    );

    expect(createSession).toHaveBeenCalledWith({
      userId: mockUser.id,
      device: mockLoginParams.device,
      expiresAt: mockLoginParams.expiresAt,
      ip: mockLoginParams.ip,
      refreshToken: 'mockToken',
      userAgent: mockLoginParams.browser,
    });

    expect(result).toEqual({
      user: mockUser,
      refreshToken: 'mockToken',
      accessToken: 'mockToken',
    });
  });

  test('should throw an error if user is not found', async () => {
    prismaMock.user.findUnique.mockResolvedValue(null);

    await expect(loginService(mockLoginParams)).rejects.toThrow('User not found');
  });

  test('should throw an error if password is invalid', async () => {
    prismaMock.user.findUnique.mockResolvedValue(mockUser);
    (bcrypt.compare as jest.Mock).mockResolvedValue(false);

    await expect(loginService(mockLoginParams)).rejects.toThrow('Invalid password');
  });
});
