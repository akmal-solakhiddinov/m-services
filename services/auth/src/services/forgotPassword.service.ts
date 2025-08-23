import { PrismaClient } from '@prisma/client';
import { generateToken } from './token';
import mailService from './email';

const prisma = new PrismaClient();

export async function forgotPasswordService(email: string) {
  try {
    if (!email) throw new Error('Email is required');

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) throw new Error(`No user found with this email: ${email}`);

    const token = generateToken(
      {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
      },
      'password',
    );

    await mailService.sendForgotPasswordMail(
      email,
      `${process.env.CLIENT_URL}/recovery-account/${token}`,
    );

    return { message: 'Password reset email sent' };
  } catch (error: any) {
    throw new Error(`Forgot password failed: ${error.message}`);
  }
}
