import mailer from '@sendgrid/mail';
import dotenv from 'dotenv';
import Mailgen from 'mailgen';

dotenv.config();

const mailGenerator = new Mailgen({
  theme: 'salted',
  product: {
    name: 'Izi Parking',
    link: '#'
  }
});
const generateEmail = (name, intro, instructions, buttonText, link) => ({
  body: {
    name,
    intro,
    action: {
      instructions,
      button: {
        color: '#33b5e5',
        text: buttonText,
        link
      }
    },
    outro: 'Need help, or have questions? Just reply to this email, we would love to help.'
  }
});
const sendmail = async (email, name) => {
  try {
    const emailBody = generateEmail(
      name,
      'Welcome, this is Izi Parking',
      'Please confirm your email',
      'Confirm email',
      `https://iziparking.herokuapp.com//api/user/${email}/confirm`
    );
    const emailTemplate = mailGenerator.generate(emailBody);
    mailer.setApiKey(process.env.SENDGRID_API_KEY);
    const message = {
      to: `${email}`,
      from: 'iziparking@noreply.rw',
      subject: 'Izi Parking Confirmation mail',
      text: `Hello ${name}, welcome to Izi Parking, please confirm your mail to get started`,
      html: emailTemplate
    };
    await mailer.send(message);
  } catch (error) { }
};
export default sendmail;
