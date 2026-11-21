// Loads every module and checks its exports. No network calls, no real keys.
const test = require('node:test');
const assert = require('node:assert');

test('src/online-store/syncInventoryToShopify.js exports syncInventoryToShopify', () => {
  assert.strictEqual(typeof require('../src/online-store/syncInventoryToShopify').syncInventoryToShopify, 'function');
});

test('src/shipping/trackParcel.js exports trackParcel', () => {
  assert.strictEqual(typeof require('../src/shipping/trackParcel').trackParcel, 'function');
});

test('src/delivery/deliveryFee.js exports deliveryFee', () => {
  assert.strictEqual(typeof require('../src/delivery/deliveryFee').deliveryFee, 'function');
});

test('src/stores/inventorySync.js exports queueInventoryCount', () => {
  assert.strictEqual(typeof require('../src/stores/inventorySync').queueInventoryCount, 'function');
});

test('src/stores/storeAlert.js exports storeAlert', () => {
  assert.strictEqual(typeof require('../src/stores/storeAlert').storeAlert, 'function');
});

test('app registry loads', () => {
  assert.ok(require('../src/app'));
});
