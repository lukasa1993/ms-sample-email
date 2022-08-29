import sgMail from '@sendgrid/mail';
import fs     from 'fs';

sgMail.setApiKey(fs.readFileSync('/run/secrets/SENDGRID_KEY').toString().trim());

export default class Email {
  async sendAuth(to, url, code) {
    const msg = {
      to,
      from:    process.env.SENDGRID_FROM,
      subject: 'Sample Authentication Email',
      text:    `visit following ${url} to authenticate \n code: ${code}`,
      html:    `Click <a href="${url}">here</a> to authenticate <br> Code: ${code}`,
    };

    return sgMail.send(msg);
  }

}
