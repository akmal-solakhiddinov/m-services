export interface Session {
  device: string;
  expiresAt: Date;
  ip: string;
  refreshToken: string;
  userAgent: string;
  userId: string;
}

export interface Location {
  range: [number, number];
  country: string;
  region: string;
  eu: string;
  timezone: string;
  city: string;
  ll: [number, number];
  metro: number;
  area: number;
}
