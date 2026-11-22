// Service: Store-to-HQ inventory sync
// Owning team: Store Systems
const { SQSClient, SendMessageCommand } = require('@aws-sdk/client-sqs');

function getClient() {
  return new SQSClient({ region: process.env.AWS_REGION || 'us-east-1' });
}

async function queueInventoryCount(input) {
  const client = getClient();
  return client.send(new SendMessageCommand({ QueueUrl: process.env.QUEUE_URL, MessageBody: JSON.stringify(input) }));
}

module.exports = { queueInventoryCount };
