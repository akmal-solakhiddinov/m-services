import jwt from 'jsonwebtoken';

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
  access: '15m',
  refresh: '7d',
  activation: '24h',
  password: '1h',
};

class TokenService {
   verifyToken(token: string, type: keyof typeof JWT_SECRETS): UserPayload | null {
    try {
      return jwt.verify(token, JWT_SECRETS[type]) as UserPayload;
    } catch (error) {
      return null;
    }
  }
}

export default new TokenService();
