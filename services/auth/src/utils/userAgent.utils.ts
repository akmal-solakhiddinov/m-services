import useragent from 'useragent';

export function userAgent(header: string) {
  const agent = useragent.parse(header);
  const os = agent.os.toString(); // Example: "Windows 10"
  const browser = agent.toAgent(); // Example: "Chrome 120.0.0"
  const device = agent.device.toString(); // Example: "Other"
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  return { os, browser, device, expiresAt };
}
