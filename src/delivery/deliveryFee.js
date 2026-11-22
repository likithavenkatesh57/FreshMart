// Service: Grocery delivery fee by distance
// Owning team: Delivery Tech
async function deliveryFee(origin, destinations) {
  const apiKey = process.env.GOOGLE_MAPS_KEY || 'maps-key';
  const res = await fetch('https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'originIndex,destinationIndex,distanceMeters,duration,condition',
    },
    body: JSON.stringify({
      origins: [{ waypoint: { address: origin } }],
      destinations: destinations.map((d) => ({ waypoint: { address: d } })),
      travelMode: 'DRIVE',
    }),
  });
  const data = await res.json();
  const results = new Array(destinations.length).fill(null);
  data.forEach((el) => {
    if (el.condition === 'ROUTE_EXISTS') {
      results[el.destinationIndex] = {
        meters: el.distanceMeters,
        seconds: parseInt(el.duration, 10),
      };
    } else {
      results[el.destinationIndex] = { meters: null, seconds: null };
    }
  });
  return results;
}

module.exports = { deliveryFee };
