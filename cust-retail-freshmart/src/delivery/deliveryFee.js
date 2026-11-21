// Service: Grocery delivery fee by distance
// Owning team: Delivery Tech
const { Client } = require('@googlemaps/google-maps-services-js');

const client = new Client({});

async function deliveryFee(origin, destinations) {
  const res = await client.distancematrix({
    params: { origins: [origin], destinations, key: process.env.GOOGLE_MAPS_KEY || 'maps-key' },
  });
  return res.data.rows[0].elements.map((e) => ({ meters: e.distance ? e.distance.value : null, seconds: e.duration ? e.duration.value : null }));
}

module.exports = { deliveryFee };
