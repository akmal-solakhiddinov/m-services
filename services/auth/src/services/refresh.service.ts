import { PrismaClient } from '@prisma/client';
import { findToken, generateToken, verifyToken } from './token';

const prisma = new PrismaClient();

export async function refreshService(refreshToken: string) {
  try {
    if (!refreshToken) {
      throw new Error('Bad authorization');
    }

    // let userPayload;
    // try {
    const userPayload = verifyToken(refreshToken, 'refresh');
    // } catch (error: any) {
    //   if (error.name === "TokenExpiredError") {
    //     throw new Error("Refresh token expired. Please log in again.");
    //   } else {
    //     throw new Error("Invalid refresh token.");
    //   }
    // }


    console.log(userPayload, "<<<<<<<<<<<<<<<<<<<<<<VERIFY TOKEN>>>>>>>>>>>>>>>>>>>");
    

    if (!userPayload) throw new Error('Bad authorization');

    const tokenDb = await findToken(refreshToken);

    if (!tokenDb) {
      throw new Error('Token not found');
    }

    const user = await prisma.user.findUnique({
      where: { id: userPayload.id },
    });

    if (!user) throw new Error('User not found');

    const accessToken = generateToken(
      {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
      },
      'access',
    );

    return { user, accessToken, refreshToken };
  } catch (error: any) {
    throw new Error(error.message);
  }
}
