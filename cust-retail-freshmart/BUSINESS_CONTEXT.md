# FreshMart (Supermarket / Retail chain)

Hypothetical customer environment for VendriftAI business-context testing (round 2). Not a real company. No real customer or patient data.

**Business model:** 400-store supermarket chain; online store on Shopify; ships non-perishables by USPS; delivers groceries locally

**Scale:** Large: 400 stores, about 9% of revenue online

**Systems:** Shopify storefront, store inventory sync on AWS, USPS parcel shipping, delivery fee calculator, Teams store alerts

**Critical workflows:** Store-to-online inventory sync; parcel shipping; delivery fees; store alerts

**Dependency on external APIs:** Inventory sync keeps online stock accurate across 400 stores; holiday is peak

**Change freezes:** 2026-11-25 to 2027-01-05 (Holiday peak code freeze)

## Services in this repo

| Service | File | Environment | Owner |
|---|---|---|---|
| Store-to-Shopify inventory sync | `src/online-store/syncInventoryToShopify.js` | production | E-commerce Platform |
| Parcel tracking for online orders | `src/shipping/trackParcel.js` | production | E-commerce Platform |
| Grocery delivery fee by distance | `src/delivery/deliveryFee.js` | production | Delivery Tech |
| Store-to-HQ inventory sync | `src/stores/inventorySync.js` | production | Store Systems |
| Store systems alerts to Teams | `src/stores/storeAlert.js` | production | Store Systems |

Expected answers live in the test workbook, not in this repo, so VendriftAI can't read them.
