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

    // Collect all custom text notes into metadata for easy order printing
    const customNotes = cart
      .filter((item) => item.customText && item.customText.trim() !== '')
      .map((item) => `${item.name}: "${item.customText}"`)
      .join(' | ');

    // Format line items for Stripe
    const lineItems = cart.map((item) => {
      // If the item has custom text, create price_data so Stripe displays the customized name line
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

      // Standard non-custom items use direct price IDs
      if (item.stripePriceId && item.stripePriceId.startsWith('price_') && !item.stripePriceId.includes('REPLACE')) {
        return {
          price: item.stripePriceId,
          quantity: item.chosenQty || 1,
        };
      }

      // Fallback
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
      
      // Collect recipient shipping address
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },

      // Attached Shipping Rate ID
      shipping_options: [
        {
          shipping_rate: 'shr_1TvPr7Ro3U7iX6n7N0s8uIrP',
        },
      ],

      // Save custom text attached to the order
      metadata: {
        custom_tag_details: customNotes || 'None',
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