// Service registry: everything this app actually loads in production.
const { syncInventoryToShopify } = require('./online-store/syncInventoryToShopify');
const { trackParcel } = require('./shipping/trackParcel');
const { deliveryFee } = require('./delivery/deliveryFee');
const { queueInventoryCount } = require('./stores/inventorySync');
const { storeAlert } = require('./stores/storeAlert');

module.exports = {
  syncInventoryToShopify,
  trackParcel,
  deliveryFee,
  queueInventoryCount,
  storeAlert,
};
