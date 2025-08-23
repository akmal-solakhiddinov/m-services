import bcrypt from 'bcrypt'; // Fixed import
import { PrismaClient } from '@prisma/client';
import { generateToken } from './token';
import { detectNewDevice } from './deviceDetection';
import MailService from './email';
import { createSession } from './session';
import geolite from 'geoip-lite';
import { Location } from '../utils/types';

const prisma = new PrismaClient();

interface LoginParams {
  email: string;
  password: string;
  device: string;
  browser: string;
  ip: string;
  expiresAt: Date;
}

export async function loginService({
  email,
  password,
  ip,
  device,
  browser,
  expiresAt,
}: LoginParams) {
  try {
    const location: Location | null = geolite.lookup(ip);

    
    
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error('User not found');
    
    console.log("============arrived to Login Service=========");
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error('Invalid password');

    const payload = { id: user.id, email: user.email, fullName: user.fullName };

    const refreshToken = generateToken(payload, 'refresh');
    const accessToken = generateToken(payload, 'access');

    const isNewDevice = await detectNewDevice(user.id, ip, browser);
    console.log(isNewDevice, 'is New device');

    if (isNewDevice) {
      await MailService.sendWarning(email, user.id, ip, browser, device, location);

      const newSession = await createSession({
        userId: user.id,
        device,
        expiresAt,
        ip,
        refreshToken,
        userAgent: browser,
      });
    }

    return { user, refreshToken, accessToken };
  } catch (error: any) {
    
    throw new Error(error.message || 'An error occurred');
  }
}
