const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  // Enable CORS headers so your frontend can talk to this API
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { cart, customerEmail } = req.body;

    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    // Format items for Stripe Checkout
    const lineItems = cart.map((item) => {
      if (item.stripePriceId && item.stripePriceId.startsWith('price_') && !item.stripePriceId.includes('REPLACE')) {
        return {
          price: item.stripePriceId,
          quantity: item.chosenQty || 1,
        };
      }

      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name + (item.customText ? ` (${item.customText})` : ''),
            images: item.photo ? [item.photo] : [],
          },
          unit_amount: Math.round((item.totalLineCost / item.chosenQty) * 100),
        },
        quantity: item.chosenQty || 1,
      };
    });

    // Safely structure domain URL with trailing slash
    let origin = req.headers.origin || req.headers.referer || 'http://localhost';
    if (!origin.endsWith('/')) {
      origin += '/';
    }
    
    // Create the session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      customer_email: customerEmail || undefined,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'], 
      },
      success_url: `${origin}cart.html?success=true`,
      cancel_url: `${origin}cart.html?canceled=true`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe Session Error:', err);
    return res.status(500).json({ error: err.message });
  }
};