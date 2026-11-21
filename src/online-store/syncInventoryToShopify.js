// Service: Store-to-Shopify inventory sync
// Owning team: E-commerce Platform
const axios = require('axios');

const API_VERSION = '2024-01';

function shopify() {
  return axios.create({
    baseURL: `https://${process.env.SHOPIFY_SHOP || 'example'}.myshopify.com/admin/api/${API_VERSION}`,
    headers: { 'X-Shopify-Access-Token': process.env.SHOPIFY_TOKEN || 'shpat_placeholder' },
  });
}

async function syncInventoryToShopify(item) {
  const api = shopify();
  // Set the online stock level for one store-linked item.
  await api.post('/inventory_levels/set.json', {
    location_id: item.locationId,
    inventory_item_id: item.inventoryItemId,
    available: item.quantity,
  });
  return true;
}

module.exports = { syncInventoryToShopify };
