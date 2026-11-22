// Service: Store-to-Shopify inventory sync
// Owning team: E-commerce Platform
const axios = require('axios');

const API_VERSION = '2026-10';

function shopify() {
  return axios.create({
    baseURL: `https://${process.env.SHOPIFY_SHOP || 'example'}.myshopify.com/admin/api/${API_VERSION}`,
    headers: { 'X-Shopify-Access-Token': process.env.SHOPIFY_TOKEN || 'shpat_placeholder' },
  });
}

async function syncInventoryToShopify(item) {
  const api = shopify();
  // Set the online stock level for one store-linked item.
  await api.post('/graphql.json', {
    query: `mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) {
      inventorySetQuantities(input: $input) {
        inventoryAdjustmentGroup {
          createdAt
        }
        userErrors {
          field
          message
        }
      }
    }`,
    variables: {
      input: {
        name: 'available',
        reason: 'correction',
        ignoreCompareQuantity: true,
        quantities: [
          {
            inventoryItemId: `gid://shopify/InventoryItem/${item.inventoryItemId}`,
            locationId: `gid://shopify/Location/${item.locationId}`,
            quantity: item.quantity,
          },
        ],
      },
    },
  });
  return true;
}

module.exports = { syncInventoryToShopify };
