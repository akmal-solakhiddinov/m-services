import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { generateToken, saveToken } from './token';
import mailService from './email';

const prisma = new PrismaClient();
const SALT_ROUNDS = 10; // Use a constant for bcrypt salt rounds

export async function registerService(
  email: string,
  password: string,
  fullName: string,
  ip: string,
  device: string,
  browser: string,
  expiresAt: Date,
) {
  try {
    
    const existingUser = await prisma.user.findUnique({ where: { email } });
    
    if (existingUser) {
      throw new Error('Email already have used');
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await prisma.user.create({
      data: {
        email,
        fullName,
        password: hashedPassword,
      },
    });

    if (!user) {
      throw new Error('User could not be created');
    }

    const payload = {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
    };

    const activationToken = generateToken(payload, 'activation');

    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/v-1/auth/activation/${activationToken}`,
    );

    const refreshToken = generateToken(payload, 'refresh');
    const accessToken = generateToken(payload, 'refresh');

    await saveToken(user.id, refreshToken, device, browser, ip, expiresAt);

    return {
      user,
      accessToken,
      refreshToken,
    };
  } catch (error: any) {
    throw new Error(error?.message);
  }
}
