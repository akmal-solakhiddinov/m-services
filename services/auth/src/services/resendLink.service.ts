import { PrismaClient } from '@prisma/client';
import { generateToken } from './token';
import mailService from './email';

const prisma = new PrismaClient();
export async function resendLinkService(email: string) {
  try {
    if (!email) throw new Error('Missing fields! (email)');

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error('User not found with this! (email)');
    const activationToken = generateToken(
      {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
      },
      'activation',
    );
    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/auth/activation/${activationToken}`,
    );
    return { success: true };
  } catch (error) {
    throw error;
  }
}
