// Service: Store systems alerts to Teams
// Owning team: Store Systems
const axios = require('axios');

const TEAMS_WEBHOOK_URL = process.env.TEAMS_WEBHOOK_URL
  || 'https://example.webhook.office.com/webhookb2/00000000-0000-0000-0000-000000000000@tenant/IncomingWebhook/abc/def';

async function storeAlert(title, text) {
  await axios.post(TEAMS_WEBHOOK_URL, {
    '@type': 'MessageCard',
    '@context': 'http://schema.org/extensions',
    summary: title,
    themeColor: 'D70000',
    title,
    text,
  });
  return true;
}

module.exports = { storeAlert };
