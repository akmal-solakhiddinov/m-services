import { detectNewDevice } from '../services/deviceDetection'; // Adjust the path as needed
import { PrismaClient } from '@prisma/client';

jest.mock('@prisma/client', () => {
  const mockPrisma = {
    session: {
      findMany: jest.fn(),
    },
  };
  return { PrismaClient: jest.fn(() => mockPrisma) };
});

const prisma = new PrismaClient() as jest.Mocked<PrismaClient>;
// Helper to mock Prisma return values
function mockPrismaSessions(sessions: any[]) {
  (prisma.session.findMany as jest.Mock).mockResolvedValue(sessions);
}

describe('detectNewDevice', () => {
  const userId = 'user123';

  afterEach(() => {
    jest.clearAllMocks(); // Reset mocks after each test
  });

  test('should return true if there are no previous sessions (first login)', async () => {
    mockPrismaSessions([]);

    const result = await detectNewDevice(userId, '192.168.1.1', 'Chrome/100');

    expect(result).toBe(true); // No previous session → New device
  });

  test('should return false if the same device and IP exist in previous sessions', async () => {
    mockPrismaSessions([{ id: 1, userId, ip: '192.168.1.1', userAgent: 'Chrome/100' }]);

    const result = await detectNewDevice(userId, '192.168.1.1', 'Chrome/100');

    expect(result).toBe(false); // Existing session → Not a new device
  });

  test('should return true if the IP is different but the user agent is the same', async () => {
    mockPrismaSessions([{ id: 1, userId, ip: '203.0.113.5', userAgent: 'Chrome/100' }]);

    const result = await detectNewDevice(userId, '192.168.1.1', 'Chrome/100');

    expect(result).toBe(true); // Different IP → New device
  });

  test('should return true if the user agent is different but the IP is the same', async () => {
    mockPrismaSessions([{ id: 1, userId, ip: '192.168.1.1', userAgent: 'Firefox/90' }]);

    const result = await detectNewDevice(userId, '192.168.1.1', 'Chrome/100');

    expect(result).toBe(true); // Different browser → New device
  });

  test('should return true if both the IP and user agent are different', async () => {
    mockPrismaSessions([{ id: 1, userId, ip: '203.0.113.5', userAgent: 'Safari/15' }]);

    const result = await detectNewDevice(userId, '192.168.1.1', 'Chrome/100');

    expect(result).toBe(true); // Completely new login environment
  });

  test('should handle errors gracefully', async () => {
    (prisma.session.findMany as jest.Mock).mockRejectedValue(new Error('Database error'));

    await expect(detectNewDevice(userId, '192.168.1.1', 'Chrome/100')).rejects.toThrow(
      'Database error',
    );
  });
});
