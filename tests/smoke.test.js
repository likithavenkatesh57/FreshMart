// Loads every module and checks its exports. No network calls, no real keys.
const test = require('node:test');
const assert = require('node:assert');

test('src/online-grocery/checkoutCharge.js exports checkoutCharge', () => {
  assert.strictEqual(typeof require('../src/online-grocery/checkoutCharge').checkoutCharge, 'function');
});

test('src/delivery/deliveryEtaSms.js exports sendDeliveryEta', () => {
  assert.strictEqual(typeof require('../src/delivery/deliveryEtaSms').sendDeliveryEta, 'function');
});

test('src/stores/inventorySync.js exports queueInventoryCount', () => {
  assert.strictEqual(typeof require('../src/stores/inventorySync').queueInventoryCount, 'function');
});

test('src/stores/priceFileUpload.js exports uploadPriceFile', () => {
  assert.strictEqual(typeof require('../src/stores/priceFileUpload').uploadPriceFile, 'function');
});

test('src/marketing/weeklyFlyer.js exports sendWeeklyFlyer', () => {
  assert.strictEqual(typeof require('../src/marketing/weeklyFlyer').sendWeeklyFlyer, 'function');
});

test('app registry loads', () => {
  assert.ok(require('../src/app'));
});
