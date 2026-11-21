// Service: Online grocery checkout
// Owning team: E-commerce Payments
const Stripe = require('stripe');

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');
}

async function checkoutCharge(amountCents, cardToken, reference) {
  const stripe = getStripe();
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amountCents,
    currency: 'usd',
    payment_method: cardToken,
    description: reference,
    confirm: true,
  });
  return { id: paymentIntent.id, paid: paymentIntent.status === 'succeeded' };
}

module.exports = { checkoutCharge };
