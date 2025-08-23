import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
interface UserPayload {
  id: string;
  fullName: string;
  email: string;
}

const JWT_SECRETS = {
  access: process.env.JWT_ACCESS_SECRET || 'default-secret-key',
  refresh: process.env.JWT_REFRESH_SECRET || 'default-secret-key',
  activation: process.env.JWT_ACTIVATION_SECRET || 'default-secret-key',
  password: process.env.JWT_PASSWORD_SECRET || 'default-secret-key',
};

const TOKEN_EXPIRATION = {
  access: '1d', // Fixed: Added "m" for minutes
  refresh: '7d', // Fixed: "d" for days
  activation: '24h', // "h" for hours
  password: '1h',
};

// Generating new Token
export function generateToken(
  payload: object,
  type: keyof typeof JWT_SECRETS,
  // expires: keyof typeof TOKEN_EXPIRATION
): string {
  return jwt.sign(payload, JWT_SECRETS[type], {
    expiresIn: TOKEN_EXPIRATION[type] as unknown as number,
  });
}

//verif  Token
export function verifyToken(token: string, type: keyof typeof JWT_SECRETS): UserPayload | null {
  try {
    return jwt.verify(token, JWT_SECRETS[type]) as UserPayload;
  } catch (error) {
    return null;
  }
}

// Search new Token
export async function findToken(token: string) {
  try {
    
    const t = await prisma.session.findUnique({ where: { token } });
    console.log(t, "<<<<<<<<<<<<<<<<<<<<<<< TOKEN COMING FROM SERVICESE >>>>>>>>>>>>>>>>>>>>>>>");
    return t;
  } catch (error: unknown) {
    throw new Error('Failed to find token 404');
  }
}

export async function saveToken(
  userId: string,
  token: string,
  device: string,
  userAgent: string,
  ip: string,
  expiresAt: Date,
) {
  try {
    const existingToken = await prisma.session.findUnique({ where: { token } });
    if (existingToken) {
      return await prisma.session.update({ where: { token }, data: { token } });
    }
    return await prisma.session.create({
      data: { userId, token, device, userAgent, ip, expiresAt },
    });
  } catch (error) {
    throw error;
  }
}

export function deleteToken() {}

/* const tokenSmaple = generateToken(
  { id: 1, fullname: "akmal", email: "akmal#" },
  "access",
  "access"
);

console.log(tokenSmaple, "<--- token");

console.log(
  saveToken(
    "test-user-abbos",
    tokenSmaple,
    "device-1",
    "chrome",
    "21331231",
    "esafasfa"
  ).then((d) => d),
  "Save Token"
);

console.log(
  findToken(tokenSmaple).then((data) => data),
  "find token"
);

console.log(verifyToken(tokenSmaple, "access"));
 */
