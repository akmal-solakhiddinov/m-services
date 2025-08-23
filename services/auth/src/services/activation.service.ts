import { PrismaClient } from '@prisma/client';
import { verifyToken } from './token';
import mailService from './email';
const prisma = new PrismaClient();

export async function activationSerivice(token: string) {
  try {
    const userPayload = verifyToken(token, 'activation');
    if (!userPayload) throw new Error('Token is invalid or has expired');

    const user = userPayload;

    const prismaUser = await prisma.user.findUnique({
      where: { id: user.id },
    });
    console.log(prismaUser);
    if (!prismaUser) throw new Error('User not found');

    if (prismaUser.isActivated) throw new Error('User is already activated');

    await prisma.user.update({
      where: { id: user.id },
      data: { isActivated: true },
    });

    await mailService.sendSuccess(user.email, 'Register', 'Account activated successfully');
    return { message: 'Account activated successfully' };
  } catch (error: any) {
    throw new Error(`Activation failed: ${error.message}`);
  }
}
