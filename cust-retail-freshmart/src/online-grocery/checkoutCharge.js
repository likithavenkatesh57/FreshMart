// Service: Online grocery checkout
// Owning team: E-commerce Payments
const Stripe = require('stripe');

function getStripe() {
  return Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');
}

async function checkoutCharge(amountCents, cardToken, reference) {
  const stripe = getStripe();
  const charge = await stripe.charges.create({
    amount: amountCents,
    currency: 'usd',
    source: cardToken,
    description: reference,
  });
  return { id: charge.id, paid: charge.paid };
}

module.exports = { checkoutCharge };
