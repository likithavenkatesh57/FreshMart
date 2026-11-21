// Service: Delivery ETA SMS
// Owning team: Delivery Tech
const twilio = require('twilio');

function getTwilio() {
  return twilio(
    process.env.TWILIO_ACCOUNT_SID || 'AC00000000000000000000000000000000',
    process.env.TWILIO_AUTH_TOKEN || 'auth_placeholder',
  );
}

async function sendDeliveryEta(to, body) {
  const client = getTwilio();
  const msg = await client.messages.create({ to, from: process.env.TWILIO_FROM, body });
  return msg.sid;
}

module.exports = { sendDeliveryEta };
