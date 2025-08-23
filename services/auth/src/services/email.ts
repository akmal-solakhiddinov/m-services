import nodemailer from 'nodemailer';
import { Location } from '../utils/types';

class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendActivationMail(email: string, activationLink: string) {
    await this.transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Account Activation`,
      html: `
				<div>
					<a href="${activationLink}">Click here to activate your account</a>
					<p>${activationLink}</p>
				</div>
			`,
    });
  }

  async sendForgotPasswordMail(email: string, activationLink: string) {
    await this.transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Forgot Password`,
      html: `
				<div>
					<h1>Password Recovery</h1>
					<p>If you want to recover your account, click the link below.</p>
					<a href="${activationLink}">Recover Account</a>
					<p><b>This link is valid for 15 minutes.</b></p>
					<p>${activationLink}</p>
				</div>
			`,
    });
  }

  async sendSuccess(email: string, title: string, message: string) {
    await this.transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `${title}`,
      html: message,
    });
  }

  async sendWarning(
    email: string,
    userId: string,
    ip: string,
    userAgent: string,
    device: string,
    location: Location | null,
  ) {
    console.log('send warning email');

    try {
      const info = await this.transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'New Device Detected',
        html: `
          <div>
            <h1>New Login Alert</h1>
            <p>We detected a login to your account from a new device.</p>
            <p><b>User ID:</b> ${userId}</p>
            <p><b>IP Address:</b> ${ip}</p>
            <p><b>Device:</b> ${device}</p>
            <p><b>Browser:</b> ${userAgent}</p>
            <p><b>Location:</b>
             <code>
             country:${location?.country}
             city:${location?.city}
             timezone:${location?.timezone}
            </code>
            </p>
            <p>If this was not you, please secure your account immediately.</p>
          </div>
        `,
      });

      // console.log("Email sent successfully!", info);
    } catch (error: any) {
      console.error('Error sending email:', error);
    }
  }
}

export default new MailService();
