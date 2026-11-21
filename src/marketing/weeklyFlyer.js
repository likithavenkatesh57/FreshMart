// Service: Weekly promo flyer email (about 4M subscribers)
// Owning team: CRM / Marketing Tech
const axios = require('axios');

async function sendWeeklyFlyer(to, subject, html) {
  const form = new URLSearchParams({
    api_user: process.env.SENDGRID_USER || 'user_placeholder',
    api_key: process.env.SENDGRID_PASSWORD || 'password_placeholder',
    to,
    from: process.env.MAIL_FROM || 'no-reply@example.com',
    subject,
    html,
  });
  const res = await axios.post('https://api.sendgrid.com/api/mail.send.json', form);
  return res.data.message === 'success';
}

module.exports = { sendWeeklyFlyer };
