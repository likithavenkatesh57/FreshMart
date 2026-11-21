// Service registry: everything this app actually loads in production.
const { checkoutCharge } = require('./online-grocery/checkoutCharge');
const { sendDeliveryEta } = require('./delivery/deliveryEtaSms');
const { queueInventoryCount } = require('./stores/inventorySync');
const { uploadPriceFile } = require('./stores/priceFileUpload');
const { sendWeeklyFlyer } = require('./marketing/weeklyFlyer');

module.exports = {
  checkoutCharge,
  sendDeliveryEta,
  queueInventoryCount,
  uploadPriceFile,
  sendWeeklyFlyer,
};
