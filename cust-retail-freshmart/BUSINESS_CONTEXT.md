# FreshMart (Supermarket / Retail chain)

Hypothetical customer environment for VendriftAI business-context testing. Not a real company. No real customer or patient data.

**Business model:** 400-store supermarket chain; in-store POS from a separate vendor; online grocery delivery is the growth channel

**Scale:** Large: 400 stores, about 9% of revenue online

**Systems:** Online grocery checkout, delivery ETA SMS, store-to-HQ inventory sync, shelf price distribution, promo email

**Critical workflows:** Online grocery checkout; nightly inventory sync; daily price file to every store; weekly promo flyer

**Dependency on external APIs:** Inventory and price sync run every store's shelves; online checkout is the growth channel; holiday is peak

**Change freezes:** 2026-11-25 to 2027-01-05 (Holiday peak code freeze)

## Services in this repo

| Service | File | Environment | Owner |
|---|---|---|---|
| Online grocery checkout | `src/online-grocery/checkoutCharge.js` | production | E-commerce Payments |
| Delivery ETA SMS | `src/delivery/deliveryEtaSms.js` | production | Delivery Tech |
| Store-to-HQ inventory sync | `src/stores/inventorySync.js` | production | Store Systems / Supply Chain IT |
| Daily shelf price file to stores | `src/stores/priceFileUpload.js` | production | Store Systems / Supply Chain IT |
| Weekly promo flyer email (about 4M subscribers) | `src/marketing/weeklyFlyer.js` | production | CRM / Marketing Tech |

Machine-readable version: `.github/vendriftai-context.yml` (proposed format).
Expected answers for every test case are in the test workbook, not in this repo, so VendriftAI can't read them.
