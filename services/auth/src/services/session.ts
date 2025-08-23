import { PrismaClient } from '@prisma/client';
import type { Session } from '../utils/types.ts';

const prisma = new PrismaClient();

export async function createSession({
  device,
  expiresAt,
  ip,
  refreshToken,
  userAgent,
  userId,
}: Session) {
  try {
    return await prisma.session.create({
      data: {
        device,
        expiresAt,
        ip,
        token: refreshToken,
        userAgent,
        userId,
      },
    });
  } catch (error) {
    throw error;
  }
}
