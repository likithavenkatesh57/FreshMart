// Service: Daily shelf price file to stores
// Owning team: Store Systems / Supply Chain IT
const AWS = require('aws-sdk');

function getClient() {
  return new AWS.S3({ region: process.env.AWS_REGION || 'us-east-1' });
}

async function uploadPriceFile(input) {
  const client = getClient();
  return client.putObject({ Bucket: process.env.BUCKET || 'app-data', Key: input.key, Body: input.body }).promise();
}

module.exports = { uploadPriceFile };
