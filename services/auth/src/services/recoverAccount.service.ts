import { PrismaClient } from '@prisma/client';
import { verifyToken } from './token';
import bcrypt from 'bcrypt';
import mailService from './email';

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;
export async function recoverAccountService(token: string, newPassword: string) {
  try {
    if (!token) throw new Error('Invalid token');

    const user = verifyToken(token, 'password');

    if (!user || !user.id) throw new Error('Token is invalid or has expired');

    const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);

    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    await mailService.sendSuccess(
      user.email,
      'Password successfully changed',
      `
				<div>
					<h1>Your password changed successful!</h1>
					<p>If this wasn’t you, please reset your password immediately.</p>
				</div>
			`,
    );

    return { message: 'Password has been reset successfully' };
  } catch (error: any) {
    throw new Error(`Password recovery failed: ${error.message}`);
  }
}
