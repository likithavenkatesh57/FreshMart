// Service: Parcel tracking for online orders
// Owning team: E-commerce Platform
const axios = require('axios');

const USPS_API_BASE = 'https://apis.usps.com';

let cachedToken = null;
let cachedTokenExpiry = 0;

async function getAccessToken() {
  if (cachedToken && Date.now() < cachedTokenExpiry) {
    return cachedToken;
  }
  const res = await axios.post(`${USPS_API_BASE}/oauth2/v3/token`, {
    grant_type: 'client_credentials',
    client_id: process.env.USPS_CLIENT_ID,
    client_secret: process.env.USPS_CLIENT_SECRET,
  });
  cachedToken = res.data.access_token;
  cachedTokenExpiry = Date.now() + (res.data.expires_in - 60) * 1000;
  return cachedToken;
}

async function trackParcel(trackingNumber) {
  const accessToken = await getAccessToken();
  const res = await axios.get(
    `${USPS_API_BASE}/tracking/v3/tracking/${trackingNumber}`,
    {
      params: { expand: 'SUMMARY' },
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return res.data.statusSummary || null;
}

module.exports = { trackParcel };
