const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  // Enable CORS headers
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

    // Collect all custom text notes into metadata
    const customNotes = cart
      .filter((item) => item.customText && item.customText.trim() !== '')
      .map((item) => `${item.name}: "${item.customText}"`)
      .join(' | ');

    // Format line items for Stripe
    const lineItems = cart.map((item) => {
      if (item.customText && item.customText.trim() !== '') {
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${item.name}`,
              description: `Custom Name Tag Wording: "${item.customText}"`,
              images: item.photo ? [item.photo] : [],
            },
            unit_amount: Math.round((item.totalLineCost / item.chosenQty) * 100),
          },
          quantity: item.chosenQty || 1,
        };
      }

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
            name: item.name,
            images: item.photo ? [item.photo] : [],
          },
          unit_amount: Math.round((item.totalLineCost / item.chosenQty) * 100),
        },
        quantity: item.chosenQty || 1,
      };
    });

    let origin = req.headers.origin || req.headers.referer || 'http://localhost';
    if (!origin.endsWith('/')) {
      origin += '/';
    }

    // Build Checkout Session Payload with manual promo codes enabled
    const sessionPayload = {
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      customer_email: customerEmail || undefined,
      allow_promotion_codes: true, // Enables manual promo code input at checkout
      // 1. Enable Automatic Tax Calculation
  automatic_tax: {
    enabled: true,
  },

  // 2. Require shipping address so Stripe knows if the buyer is in Utah
  shipping_address_collection: {
    allowed_countries: ['US'],
  },
      shipping_options: [
        {
          shipping_rate: 'shr_1TvPr7Ro3U7iX6n7N0s8uIrP',
        },
      ],
      metadata: {
        custom_tag_details: customNotes || 'None',
      },
      success_url: `${origin}cart.html?success=true`,
      cancel_url: `${origin}cart.html?canceled=true`,
    };

    const session = await stripe.checkout.sessions.create(sessionPayload);

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe Session Error:', err);
    return res.status(500).json({ error: err.message });
  }
};