// Service: Store-to-HQ inventory sync
// Owning team: Store Systems / Supply Chain IT
const AWS = require('aws-sdk');

function getClient() {
  return new AWS.SQS({ region: process.env.AWS_REGION || 'us-east-1' });
}

async function queueInventoryCount(input) {
  const client = getClient();
  return client.sendMessage({ QueueUrl: process.env.QUEUE_URL, MessageBody: JSON.stringify(input) }).promise();
}

module.exports = { queueInventoryCount };
