// Service: Parcel tracking for online orders
// Owning team: E-commerce Platform
const axios = require('axios');

const USPS_URL = 'https://secure.shippingapis.com/ShippingAPI.dll';

async function trackParcel(trackingNumber) {
  const xml = `<TrackFieldRequest USERID="${process.env.USPS_USERID || 'USERID'}"><Revision>1</Revision><ClientIp>127.0.0.1</ClientIp><SourceId>web</SourceId><TrackID ID="${trackingNumber}"/></TrackFieldRequest>`;
  const res = await axios.get(USPS_URL, { params: { API: 'TrackV2', XML: xml } });
  const match = /<StatusSummary>([^<]*)<\/StatusSummary>/.exec(res.data);
  return match ? match[1] : null;
}

module.exports = { trackParcel };
