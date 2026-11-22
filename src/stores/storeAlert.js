// Service: Store systems alerts to Teams
// Owning team: Store Systems
const axios = require('axios');

const TEAMS_WEBHOOK_URL = process.env.TEAMS_WORKFLOW_WEBHOOK_URL;

async function storeAlert(title, text) {
  await axios.post(TEAMS_WEBHOOK_URL, {
    type: 'message',
    attachments: [{
      contentType: 'application/vnd.microsoft.card.adaptive',
      contentUrl: null,
      content: {
        $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
        type: 'AdaptiveCard',
        version: '1.4',
        body: [
          {
            type: 'TextBlock', text: title, weight: 'Bolder', size: 'Medium', color: 'Attention', wrap: true,
          },
          { type: 'TextBlock', text, wrap: true },
        ],
      },
    }],
  });
  return true;
}

module.exports = { storeAlert };
