import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function detectNewDevice(
  userId: string,
  ip: string,
  userAgent: string,
): Promise<boolean> {
  try {
    //finds all sessions with this user id and return as an array of objects
    const previousSessions = await prisma.session.findMany({
      where: { userId },
      orderBy: { created: 'desc' },
    });

    console.log(previousSessions, 'previouse session');

    if (previousSessions.length === 0) return true;

    const hasMatchingSession = previousSessions.some((session: any) => {
      return session.userAgent === userAgent && session.ip === ip;
    });

    console.log(hasMatchingSession, 'has matching session');

    return !hasMatchingSession;
  } catch (error) {
    throw error;
  }
}
