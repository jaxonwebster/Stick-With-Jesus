// Initialize Stripe Publishable Key
const stripe = typeof Stripe !== 'undefined' ? Stripe('pk_live_51TvOw0Ro3U7iX6n70n5R4pFcXXF0u8I4HlBmII94w02RSTFVDjj6fNOOJ5ZVdAu7lebXSHRC64aQfH4DsyZGzB4s00tbw9BVG5') : null;

// --- Product Database ---
const STICKER_PRODUCTS = [
    { 
        id: 1, 
        stripePriceId: "price_1TvPApRo3U7iX6n7a2b0j8j3", 
        name: "Customizable Missionary Name Tag Sticker", 
        price: 4.99, 
        isCustomizable: true,
        isBestseller: true,
        category: ["youth", "primary"], 
        color: "black", 
        photos: ["images/nametag1.jpg", "images/nametag2.jpg", "images/nametag3.jpg", "images/nametag4.jpg", "images/namtag5.jpg"], 
        desc: "Our best-selling classic missionary replica tag. High-durability, waterproof and scratch resistant material. Enter your custom name text line below before adding to your cart. Size: 3 inches x 2 inches", 
        reviews: ["Placed it on my water bottle and its still holding up after several washes! - Sarah M.", "Shipped fast and great quality! - Tyler B.", "Perfect! Exceeded my expecations. - Jessica K.", "I am very happy with the item and the customer service. The packaging was high quality and arrived safely. The item itself was well made and perfectyl described - Hannah L."] 
    },
    { 
        id: 2, 
        stripePriceId: "price_1TvPq4Ro3U7iX6n75Rj4QeFU", 
        name: "Lost Sheep Sticker", 
        price: 3.99, 
        isCustomizable: false, 
        isBestseller: true,
        category: ["bible", "religious"], 
        color: "black", 
        photos: ["images/lostsheep1.jpg", "images/lostsheep2.jpg", "images/lostsheep3.jpg", "images/lostsheep4.jpg"], 
        desc: "'Lost Sheep' Bible inspired sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.25 inches x 2.5 inches ", 
        reviews: ["I am definitely going to order more of these lamb stickers! So pretty! Great quality! Fast shipping! A++ -Ashley P.", "I love this sticker! Such a good reminder. Great quality, would buy from this shop again! -Chloe S.", "Excellent gift! 10/10 - David W."] 
    },
    { 
        id: 3, 
        stripePriceId: "price_1Tw3mvRo3U7iX6n7uj8dSJt7", 
        name: "But If Not", 
        price: 3.99, 
        isCustomizable: false, 
        isBestseller: true,
        category: "bible", 
        color: "blue", 
        photos: ["images/butifnot1.jpg", "images/butifnot2.jpg"], 
        desc: "'But If Not' Bible (Daniel 3:8) inspired sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.35 inches x 2.61 inches", 
        reviews: ["Lovely design. Sticker is great quality! - Megan C.", "So cute and high quality! I get so many compliments on it and it seems like it will last a long time! Rachel G."] 
    },
    { 
        id: 4, 
        stripePriceId: "price_1Tw3nkRo3U7iX6n7QeRR07Ye", 
        name: "Love One Another", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "pink", 
        photos: ["images/love1.jpg", "images/love2.jpg"], 
        desc: "'Love One Another' sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.7 inches x 1.88 inches", 
        reviews: ["Thank you so much, it looks great! - Olivia N.", "Nice quality and shipped quickly. - Andrew F.", "It's so cute! Love it! - Bittany K"] 
    },
    { 
        id: 5, 
        stripePriceId: "price_1Tw3nTRo3U7iX6n7AZlLZ2gt", 
        name: "God Is Greater Than the Highs and Lows", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "black", 
        photos: ["images/godisgreat1.jpg", "images/godisgreat2.jpg", "images/godisgreat3.jpg"], 
        desc: "'God Is Greater Than the Highs and Lows' sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 3 inches x 1.52 inches", 
        reviews: ["High quality sticker and graphics exceeded my expecations - Caleb S.", "Was exactly what I wanted. Looks great and shipped quickly. - Logan W.", "I really love it! Thank you - Nicole T."] 
    },
    { 
        id: 6, 
        stripePriceId: "price_1Tw3aiRo3U7iX6n7t9fbkujK", 
        name: "Fisher of Men", 
        price: 3.99, 
        isCustomizable: false, 
        category: "bible", 
        color: "blue",
        photos: ["images/fisherofmen.jpg"], 
        desc: "'Fisher of Men' Matthew inspired sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.17 inches x 2.61 inches", 
        reviews: ["I loved this sticker! Great quality and seller was wonderful to do business with. -Abigail S."] 
    },
    { 
        id: 7, 
        stripePriceId: "price_1Tw3b4Ro3U7iX6n7CF0JpJRv", 
        name: "Hear Him", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "pastelle", 
        photos: ["images/hearhim.jpg"], 
        desc: "'Hear Him' sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 3.46 inches x 0.89 inches", 
        reviews: ["Lovely product. Quick shipping. Will buy from this shop again! - Benjamin H.", "Love the sticker! Great quality! - Victoria B.", "Shipped quickly and just as described. - Isaac K."] 
    },
    { 
        id: 8, 
        stripePriceId: "price_1Tw1OzRo3U7iX6n7u9JMMeyO", 
        name: "Jesus Loves Me", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "pink", 
        photos: ["images/jesuslovesme1.jpg", "images/jesuslovesme2.jpg", "images/jesuslovesme3.jpg"], 
        desc: "'Jesus Loves Me' sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.5 inches x 2.5 inches", 
        reviews: ["Best shop ever! I loved my stickers! 100% recommend! - Emily R."] 
    },
    { 
        id: 9, 
        stripePriceId: "price_1Tw6cIRo3U7iX6n7EHoEr0Ku", 
        name: "Let God Prevail", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "colorful", 
        photos: ["images/prevail1.jpg", "images/prevail2.jpg"], 
        desc: "'Let God Prevail' sticker inspired by Russel M. Nelson's General Conference address given in 2020. Printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.85 inches x 1.84 inches", 
        reviews: ["Great sticker with amazing quality. Love it! - Christian L.", "I really love my stickers! No complaints! - Hailey M.", "Loved! Exactly what I was looking for and I bought enough to share with my friends and family. - Amber g."] 
    },
    { 
        id: 10, 
        stripePriceId: "price_1Tw6ekRo3U7iX6n71Qk0tyTq", 
        name: "Child of God", 
        price: 3.99, 
        isCustomizable: false, 
        category: "primary", 
        color: "colorful", 
        photos: ["images/cog1.jpg", "images/cog2.jpg"], 
        desc: "Inspired by the primary song, 'I am a Child of God'. Printed on waterproof and scratch resistant laminated sticker paper. Sizing: 3.25 inches x 1.11 inches", 
        reviews: ["A small sticker with a BIG impact! Love that the colors are gender neutral so all my kids can use them as a reminder! - Brooke P."] 
    },
    { 
        id: 11, 
        stripePriceId: "price_1Tw1QYRo3U7iX6n7cgnhNhYL", 
        name: "I Can Do Hard Things", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "colorful", 
        photos: ["images/hardthings1.jpg"], 
        desc: "Printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.29 inches x 2.15 inches", 
        reviews: ["Super cute, I have it on my laptop and it looks great! - Alex T.", "Great quality sticker! - Zoe W."] 
    },
    { 
        id: 12, 
        stripePriceId: "price_1Tw6iQRo3U7iX6n7iEZrMt4x", 
        name: "Fruits of the Spirit", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "pink", 
        photos: ["images/fruit2.jpg", "images/fruit1.jpg", "images/fruit3.jpg"], 
        desc: "'Fruits of the Spirit' sticker inspired by Galatians 5. Printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.85 inches x 3.05 inches", 
        reviews: ["Excellent attention to detail, including the packaging. - Natalie P.", "Came out wonderful and great quality! - Jenna S."] 
    },
    { 
        id: 13, 
        stripePriceId: "price_1Tw6kmRo3U7iX6n7uP7wwJAE", 
        name: "Be Still & Know", 
        price: 3.99, 
        isCustomizable: false, 
        category: "bible", 
        color: "blue", 
        photos: ["images/bestill1.jpg"], 
        desc: "'Be Still & Know That I Am God' is a wonderful reminder from the Bible of how much power God has in our lives. Remembering this can help us feel peace in times of chaos. Printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.1 inches x 3.04 inches", 
        reviews: ["Great quality sticker! Fast shipment. - Claire D.", "Great sticker, and surprisingly sturdy even though the letters are so intricate and pretty. Love it. - Courtney L.", "Very lovely peel and stick stickers. And quick turnaround. So glad I bought this! - Alyssa B.", "Amazing product. Amazing, quick shipping. Will buy from this shop again. - Taylor P."] 
    },
    { 
        id: 14, 
        stripePriceId: "price_1Tw83DRo3U7iX6n7xbhGoCDh", 
        name: "If the Stars Were Made to Worship, So Will I", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "blue", 
        photos: ["images/stars1.jpg", "images/stars2.jpg", "images/stars3.jpg"], 
        desc: "Inspired by the song 'So Will I'. Printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2,45 inches x 2.76 inches", 
        reviews: ["Love this sticker! Even better than I thought it would be. Will definitely buy from this company again! - Katelyn B."] 
    },
    { 
        id: 15, 
        stripePriceId: "price_1TwCWjRo3U7iX6n7zZkP3pSF", 
        name: "Builders of Faith", 
        price: 3.99, 
        isCustomizable: false, 
        category: "youth", 
        color: "green", 
        photos: ["images/builders1.jpg", "images/builders2.jpg", "images/yw1.jpg", "images/yw2.jpg", "images/yw3.jpg"], 
        desc: "'Builders of Faith' young women class sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.5 inches x 2 inches", 
        reviews: ["Great quality, shipped fast! - Victoria H.", "Great stickers. So cute. Perfect for my YW as a Christmas present. - Emma J."] 
    },
    { 
        id: 16, 
        stripePriceId: "price_1TwCVsRo3U7iX6n7KwRpqrqN", 
        name: "Messengers of Hope", 
        price: 3.99, 
        isCustomizable: false, 
        category: "youth", 
        color: "yellow", 
        photos: ["images/messengers1.jpg", "images/messengers2.jpg", "images/yw1.jpg", "images/yw2.jpg", "images/yw3.jpg"], 
        desc: "'Messengers of Hope' young women class sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.5 inches x 2.5 inches", 
        reviews: ["Best shop ever! I loved my stickers! 100% recommend! - Grace A.", "Great stickers. So cute. Perfect for my YW as a Christmas present. - Emma J."] 
    },
    { 
        id: 17, 
        stripePriceId: "price_1TwCXORo3U7iX6n7GNHmV0a3", 
        name: "Gatherers of Light", 
        price: 3.99, 
        isCustomizable: false, 
        category: "youth", 
        color: "blue", 
        photos: ["images/gather1.jpg", "images/gather2.jpg", "images/gather3.jpg", "images/yw1.jpg", "images/yw2.jpg", "images/yw3.jpg"], 
        desc: "'Gatherers of Light' young women clas sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.5 inches x 2.19 inches", 
        reviews: ["Great stickers. So cute. Perfect for my YW as a Christmas present. - Emma J."] 
    },
    { 
        id: 18, 
        stripePriceId: "price_1TwQkXRo3U7iX6n7lA5sUmXX", 
        name: "Future Missionary", 
        price: 3.99, 
        isCustomizable: false, 
        category: ["youth", "primary"],
        color: "black", 
        photos: ["images/futuremissionary1.jpg"], 
        desc: "'Future Missionary' sticker for aspiring missionaries of any age! Printed on waterproof and scratch resistant laminated sticker paper. Sizing: 3 inches x 2 inches", 
        reviews: ["The seller was AMAZING and so accomodating! Thank you! - Jordan T.", "Stickers are great! I am very excited to pass them out this Sunday. - Kristy L.", "They were able to help me last minute and were so accomodating - Brandon H.", "Great quality! - Carrie R."] 
    },
    { 
        id: 19, 
        stripePriceId: "price_1TwQm8Ro3U7iX6n7eT5whY7M", 
        name: "Choose The Right", 
        price: 3.99, 
        isCustomizable: false, 
        category: "primary", 
        color: "green", 
        photos: ["images/ctr1.jpg", "images/ctr2.jpg"], 
        desc: "'Choose The Right' sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.25 inches x 2.25 inches", 
        reviews: ["High quality sticker, exceeded my expectations! - Marcus R."] 
    },
    { 
        id: 20, 
        stripePriceId: "price_1TwR02Ro3U7iX6n78e9g7DSc", 
        name: "Not Forgotten, Found", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "blue", 
        photos: ["images/notforgotten1.jpg", "images/notforgotten2.jpg"], 
        desc: "'Not Forgotten, Found' lost sheep bible inspired sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 3 inches x 1.54 inches", 
        reviews: ["Best shop ever! I loved my stickers! 100% recommend! - Nicole T."] 
    },
    { 
        id: 21, 
        stripePriceId: "price_1TwR5iRo3U7iX6n7GBpupsF7", 
        name: "Glory to God", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "yellow", 
        photos: ["images/glory1.jpg"], 
        desc: "'Glory to God' sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.7 inches x 2.25 inches", 
        reviews: ["Exactly as described. Thank you! - Sariah D.", "Excellent sticker, very durable and high quality. - Selena T."] 
    },
    { 
        id: 22, 
        stripePriceId: "price_1TwR4PRo3U7iX6n7H7kwsOrb", 
        name: "Faith Is Like A Seed", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "green", 
        photos: ["images/seed1.jpg"], 
        desc: "'Faith Is Like A Seed' sticker printed on waterproof and scratch resistant laminated sticker paper.", 
        reviews: ["Exactly what I wanted. Thank you! - Abigail F.", "Excellent quality sticker and very durable. - Amber G."] 
    },
    { 
        id: 23, 
        stripePriceId: "price_1TwogmRo3U7iX6n7QgKfgFDW", 
        name: "Provo City Center Temple", 
        price: 3.99, 
        isCustomizable: false, 
        category: "temple", 
        color: "colorful", 
        photos: ["images/provo1.jpg", "images/provo2.jpg"], 
        desc: "Provo City Center Temple sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.25 inches x 2.9 inches",
        reviews: ["These cute stickers shipped so fast, and they are exactly what I imagined! Will defintiely be buying more stickers from here! - Mary K."] 
    },
    { 
        id: 24, 
        stripePriceId: "price_1TwogERo3U7iX6n7x4mPAPHk", 
        name: "Payson, Utah Temple", 
        price: 3.99, 
        isCustomizable: false, 
        category: "temple", 
        color: "beige", 
        photos: ["images/payson1.jpg", "images/payson2.jpg"], 
        desc: "Payson, Utah Temple sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.35 inches x 3.07 inches",
        reviews: ["Great quality sticker! Fast shipment. - Tyler N.", "Amazing attention to detail and very high quality/durable - Greta A."] 
    },
    { 
        id: 25, 
        stripePriceId: "price_1TyBjvRo3U7iX6n7ld6KQ6ub", 
        name: "Think Celestial", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "colorful", 
        isBestseller: true,
        photos: ["images/thinkcelestial1.jpg", "images/thinkcelestial2.jpg"], 
        desc: "'Think Celestial' sticker inspired by Russel M. Nelson's general conference address. Printed on waterproof and scratch resistant laminated sticker paper. Sizing: 3 inches x 1.05 inches",
        reviews: ["Very cute, and looks great on my water bottle! - Jeanette M.", "We really wanted something to help remind my YW to Think Celestial and these were perfect! Shipping was quick and quality was great! - Michelle D."] 
    },
    { 
        id: 26, 
        stripePriceId: "price_1TyBmORo3U7iX6n7APUmuLl4", 
        name: "Spoiler Alert: He Lives", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "blue", 
        photos: ["images/spoiler1.jpg"], 
        desc: "Easter themed sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 3.09 inches x 0.98 inches",
        reviews: ["Very cute, and looks great on my water bottle! - Jeanette M."] 
    },
    { 
        id: 27, 
        stripePriceId: "price_1TyCUnRo3U7iX6n7eYvMWZiI", 
        name: "I Love You (Jesus Hand)", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "beige", 
        photos: ["images/hand1.webp", "images/hand2.jpg"], 
        desc: "What's better than someone saying 'I love you'? Jesus saying 'I love you'! Printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.31 inches x 2.75 inches",
        reviews: ["These cute stickers shipped so fast, and they are exactly what I imagined! Will defintiely be buying more stickers from here! - Mary K."] 
    },
    { 
        id: 28, 
        stripePriceId: "price_1TyCY7Ro3U7iX6n7GQivo8gL", 
        name: "Love God, Love Others", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "colorful", 
        photos: ["images/lovegod1.jpg"], 
        desc: "The 2 great commandments printed on waterproof and scratch resistant laminated sticker paper. Sizing: 1.88 inches x 2.9 inches",
        reviews: ["These cute stickers are perfect! Will defintiely be buying more stickers from here! - Salena T."] 
    },
    { 
        id: 29, 
        stripePriceId: "price_1TyCauRo3U7iX6n7cpYyOXhP", 
        name: "God's Got This", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "blue", 
        photos: ["images/gotthis1.jpg", "images/gotthis2.webp", "images/gotthis3.webp"], 
        desc: "'God's Got This' sticker printed on waterproof and scratch resistant laminated sticker paper.",
        reviews: ["Very cute, and looks great on my water bottle! - Jeanette M."] 
    },
    { 
        id: 30, 
        stripePriceId: "price_1TyCdlRo3U7iX6n70XSyyGNd", 
        name: "Consider the Lillies", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "green", 
        photos: ["images/lillies.jpg"], 
        desc: "'Consider the Lillies' song inspired sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.6 inches x 2.03 inches",
        reviews: ["Exactly what I wanted. Thank you! - Abigail F.", "Very cute, and looks great on my water bottle! - Jeanette M."] 
    },
    { 
        id: 31, 
        stripePriceId: "price_1TyCgCRo3U7iX6n7zjJ3Ww7z", 
        name: "Come, Follow Me", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "beige", 
        photos: ["images/cfm1.jpg", "images/cfm2.jpg"], 
        desc: "'Come Follow Me' sticker of Jesus with his outstretched arm printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2 inches x 2.28 inches",
        reviews: ["Exactly what I wanted. Thank you! - Abigail F.", "Very cute, and looks great on my water bottle! - Jeanette M."] 
    },
    { 
        id: 32, 
        stripePriceId: "price_1TyCjtRo3U7iX6n7Cm0s0OFX", 
        name: "5 Loaves, 2 Fish - What Can God Make of You?", 
        price: 3.99, 
        isCustomizable: false, 
        category: "bible", 
        color: "blue", 
        photos: ["images/loaves.jpg"], 
        desc: "Inspired by the story of Jesus feeding thousands with only 5 loaves of bread and 2 fish. If he can work miracles, imagine what he can do with you. Printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.18 inches x 2.75 inches",
        reviews: ["High quality sticker, exceeded my expectations! - Marcus R."] 
    },
    { 
        id: 33, 
        stripePriceId: "price_1TyC4rRo3U7iX6n7ZpM69E9D", 
        name: "Jesus Wants Me For a Sunbeam", 
        price: 3.99, 
        isCustomizable: false, 
        category: "primary", 
        color: "yellow", 
        photos: ["images/sunbeam1.jpg", "images/sunbeam2.jpg"], 
        desc: "'Jesus wants me for a sunbeam' sticker inspired by the primary song. Printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.25 inches x 2.25 inches",
        reviews: ["Very cute, and looks great on my water bottle! I recommed this item and shop - Lacey P."] 
    },
    { 
        id: 34, 
        stripePriceId: "price_1TyCsPRo3U7iX6n7sDVX8Oql", 
        name: "Lord, I Believe", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "black", 
        photos: ["images/ibelieve.jpg"], 
        desc: "'Lord, I Believe' sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 3 inches x 2 inches",
        reviews: ["Very cute, and looks great on my water bottle! I recommed this item and shop - Lacey P."] 
    },
    { 
        id: 35, 
        stripePriceId: "price_1TyCv7Ro3U7iX6n7pWOcZxsZ", 
        name: "Youth Theme 2026 - Walk With Me", 
        price: 3.99, 
        isCustomizable: false, 
        category: "youth", 
        color: "blue", 
        photos: ["images/youth20261.jpg", "images/youth20262.jpg"], 
        desc: "2026 LDS youth theme sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.4 inches x 2.58 inches",
        reviews: ["We bought this for our youth and they loved it! - Jessica R."] 
    },
    /* --- STATE STICKERS --- */
    { 
        id: 36, 
        stripePriceId: "price_1TwoFfRo3U7iX6n7FXoam0hz", 
        name: "Arizona", 
        price: 3.99, 
        isCustomizable: false, 
        category: "states", 
        color: "beige", 
        photos: ["images/arizona1.jpg", "images/arizona2.jpg"], 
        desc: "Arizona sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.25 inches x 2.69 inches", 
        reviews: ["Super cute, great quality sitcker! Looking forward to ordering more in the future! - Alisa W.", "Good quality, looks just like the picture - Kevin R.", "Super cute and great quality! - Pamela H."] 
    },
    { 
        id: 37, 
        stripePriceId: "price_1TwoHkRo3U7iX6n7MYrrQNZy", 
        name: "Utah", 
        price: 3.99, 
        isCustomizable: false, 
        isBestseller: true,
        category: "states", 
        color: "colorful", 
        photos: ["images/utah1.jpg"], 
        desc: "Utah sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.25 inches x 2.9 inches", 
        reviews: ["Awesome sticker, great job! - Alexis P.", "Love it! It looks great on my laptop. - Lauren R."] 
    },
    { 
        id: 38, 
        stripePriceId: "price_1TwoIuRo3U7iX6n7QgpXfRNK", 
        name: "Colorado", 
        price: 3.99, 
        isCustomizable: false, 
        category: "states", 
        color: "colorful", 
        photos: ["images/colorado1.jpg"], 
        desc: "Colorado sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.75 inches x 1.93 inches", 
        reviews: ["Quality is excellent, thank you! - Lexi S."] 
    },
    { 
        id: 39, 
        stripePriceId: "price_1TwoKVRo3U7iX6n7BNipNKJY", 
        name: "Texas", 
        price: 3.99, 
        isCustomizable: false, 
        category: "states", 
        color: "colorful", 
        photos: ["images/texas1.jpg", "images/texas2.jpg"], 
        desc: "Texas sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 3.5 inches x 3.35 inches", 
        reviews: ["This is the CUTEST Texas sticker. I spent days looking for one I loved and this was it! I have no regrets, and I get so many compliments! Owners were so sweet and made sure I got my stickers in a timely manner and safely. Definitely will order from this store again. You should too! - Anne F.", "I love this sticker! I recommend it to my Texas friends! It's such a unique design and the quality is AMAZING for the price. - Taylor B."] 
    },
    { 
        id: 40, 
        stripePriceId: "price_1TwoLtRo3U7iX6n7QO1YCXhi", 
        name: "Florida", 
        price: 3.99, 
        isCustomizable: false, 
        category: "states", 
        color: "colorful", 
        photos: ["images/florida1.jpg", "images/florida2.jpg"], 
        desc: "Florida sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 3.25 inches x 2.86 inches", 
        reviews: ["My new favorite Etsy shop! These stickers are so cute and high quality! - Addison L."] 
    },
    { 
        id: 41, 
        stripePriceId: "price_1TwoNhRo3U7iX6n7nZJyy9Ux", 
        name: "Alaska", 
        price: 3.99, 
        isCustomizable: false, 
        category: "states", 
        color: "blue", 
        photos: ["images/alaska1.jpg", "images/alaska2.jpg"], 
        desc: "Alaska sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.95 inches x 2.93 inches", 
        reviews: ["This sticker is so pretty and I love it - Nancy S.", "Beautiful, good quality sticker. As described and would purchase again - Carly G.", "Beautiful sticker and gret experience. Highly recommend! - Brynn S."] 
    },
    { 
        id: 42, 
        stripePriceId: "price_1TwoPZRo3U7iX6n7DY7WfPZS", 
        name: "Utah Name", 
        price: 3.99, 
        isCustomizable: false, 
        category: "states", 
        color: "colorful", 
        photos: ["images/utahname1.jpg", "images/utahname2.jpg", "images/utahname3.jpg"], 
        desc: "Utah sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 3.31 inches x 1.2 inches", 
        reviews: ["LOVED this design after my Utah trip and had to add it to my water bottle! - Ryan H."] 
    },
    { 
        id: 43, 
        stripePriceId: "price_1TwoXdRo3U7iX6n7Xdj8jaC7", 
        name: "Idaho", 
        price: 3.99, 
        isCustomizable: false, 
        category: "states", 
        color: "colorful", 
        photos: ["images/idaho1.jpg"], 
        desc: "Idaho sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.25 inches x 3.2 inches", 
        reviews: ["Great quality sticker! Fast shipment. - Stevie L.", "I could not recommend this shop more! Amazing stickers - Brynley R."] 
    },
    { 
        id: 44, 
        stripePriceId: "price_1TwoY3Ro3U7iX6n73O5stLxb", 
        name: "Nevada", 
        price: 3.99, 
        isCustomizable: false, 
        category: "states", 
        color: "colorful", 
        photos: ["images/nevada1.jpg"], 
        desc: "Nevada sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2 inches x 2.96 inches", 
        reviews: ["Great quality sticker! Fast shipment. - Faith B."] 
    },
    { 
        id: 45, 
        stripePriceId: "price_1TwoZ7Ro3U7iX6n7UGExaNH9", 
        name: "New Mexico", 
        price: 3.99, 
        isCustomizable: false, 
        category: "states", 
        color: "colorful", 
        photos: ["images/newmexico1.jpg"], 
        desc: "New Mexico sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.24 inches x 2.43 inches",
        reviews: ["Great quality sticker! Fast shipment. - Faith B."] 
    },
    { 
        id: 46, 
        stripePriceId: "price_1TwobnRo3U7iX6n7xT55f94y", 
        name: "Oregon", 
        price: 3.99, 
        isCustomizable: false, 
        category: "states", 
        color: "green", 
        photos: ["images/oregon1.jpg"], 
        desc: "Oregon sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.95 inches x 2.17 inches",
        reviews: ["Great quality sticker! Fast shipment. - Faith B."] 
    },
    { 
        id: 47, 
        stripePriceId: "price_1TwodIRo3U7iX6n7NiH5t811", 
        name: "Wyoming", 
        price: 3.99, 
        isCustomizable: false, 
        category: "states", 
        color: "colorful", 
        photos: ["images/wyoming1.jpg"], 
        desc: "Wyoming sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 2.75 inches x 2.11 inches",
        reviews: ["Beautifuk! Just as I had hoped! - Noah D.", "Perfect for my water bottle - Lacey P.", "Super cute, just as expected - Sarah R.", "Great product, fast shipping. Recommend. - Ashley C."] 
    },
    { 
        id: 48, 
        stripePriceId: "price_1TyC7IRo3U7iX6n7AIUY6PAq", 
        name: "California", 
        price: 3.99, 
        isCustomizable: false, 
        category: "states", 
        color: "colorful", 
        photos: ["images/california1.jpg"], 
        desc: "California sticker printed on waterproof and scratch resistant laminated sticker paper. Sizing: 3 inches x 3.45 inches",
        reviews: ["Great quality sticker! Fast shipment. - Tyler N."] 
    },
    /* --- NEW YORK STICKERS --- */
    { 
        id: 49, 
        stripePriceId: "price_1Tw1PqRo3U7iX6n7aMy4MZNW", 
        name: "NYC Rat Sticker", 
        price: 3.99, 
        isCustomizable: false, 
        isBestseller: true,
        category: "other", 
        color: "yellow", 
        photos: ["images/rat1.jpg", "images/rat2.jpg"], 
        desc: "Having both served church missions in New York City, subways rats oddly feel very sacred to us! Including a few New York inspired stickers on our shop pays homage to our story and our tesimonies. We didn't know it at the time, but this sticker has become one of our bestsellers! Printed on waterproof and scratch resistant laminated sticker paper. Sizing: 3.5 inches x 1.85 inches", 
        reviews: ["I love my rat sticker! Makes me think of NYC subways and how much I love the city. Veyr cute, durable, and I get so many compliments on it. - Anne R.", "Loved this adorable sticker! Better than all souvenirs I got from my actual trip to New York! - Derek K.", "Super cute, and looks perfect on my computer. - Shelby A.", "Very good product, thank you! - Alexis M."] 
    },
    { 
        id: 50, 
        stripePriceId: "price_1TwQxsRo3U7iX6n7p9hYd73F", 
        name: "NYC Subway Map", 
        price: 3.99, 
        isCustomizable: false, 
        category: "other", 
        color: "beige", 
        photos: ["images/nycmap1.jpg", "images/nycmap2.jpg"], 
        desc: "Having both served church missions in New York City, including a few New York inspired stickers on our shop pays homage to our story and our tesimonies. We didn't know it at the time, but this sticker has become one of our bestsellers! Printed on waterproof and scratch resistant laminated sticker paper. Sizing: 1.6 inches x 3.48 inches", 
        reviews: ["It's adorable, thank you so much! - Faith W.", "Sticker is a perfect memento for riding the subways in NYC - Luke M.", "Great quality and fast shipping! - Jessica R.", "Arrived in safe packaging with no damage! Perfect sticker - Madison H."] 
    },
    { 
        id: 51, 
        stripePriceId: "price_1TyCAlRo3U7iX6n7PoE4mRpA", 
        name: "Bronx, NY", 
        price: 3.99, 
        isCustomizable: false, 
        category: "other", 
        color: "colorful", 
        photos: ["images/bronx.jpg"], 
        desc: "Having both served church missions in New York City, including a few New York inspired stickers on our shop pays homage to our story and our tesimonies. We didn't know it at the time, but this sticker has become one of our bestsellers! Printed on waterproof and scratch resistant laminated sticker paper. Sizing: 3.6 inches x 1.96 inches",
        reviews: ["Loved this adorable sticker! Better than all souvenirs I got from my actual trip to New York! - Derek K.", "Super cute, and looks perfect on my computer. - Shelby A.", "Very good product, thank you! - Alexis M."] 
    },

    // --- EXCLUSIVE CART-ONLY MYSTERY STICKER ---
    {
        id: 999,
        stripePriceId: "price_1Tw7lTRo3U7iX6n7SJbdu1wp", 
        name: "Mystery Sticker",
        price: 1.99,
        isCustomizable: false,
        isExclusive: true, 
        category: "other",
        color: "other",
        photos: ["images/carthero.JPG"], 
        desc: "A surprise sticker selected randomly from our shop!",
        reviews: []
    }
];

function toggleMobileNavMenu(btn) {
  const drawer = document.getElementById('navbar-links-drawer');
  if (!drawer) return;

  const isOpen = drawer.classList.contains('mobile-open');

  if (isOpen) {
    drawer.classList.remove('mobile-open');
    if (btn) {
      btn.classList.remove('is-active');
      btn.setAttribute('aria-expanded', 'false');
    }
  } else {
    drawer.classList.add('mobile-open');
    if (btn) {
      btn.classList.add('is-active');
      btn.setAttribute('aria-expanded', 'true');
    }
  }
}

// --- Check Instagram Promo Code Visibility ---
function checkInstaPromoVisibility() {
    const hasDiscount = localStorage.getItem('swj_10off_claimed') === 'true';
    const reminderEl = document.getElementById('insta-promo-reminder');
    
    if (reminderEl) {
        reminderEl.style.display = hasDiscount ? 'block' : 'none';
    }
}

// --- Tiered Pricing Matrix Calculator ---
function getTieredPricePerUnit(basePrice, quantity) {
    if (quantity >= 100) return basePrice * 0.50; 
    if (quantity >= 50)  return basePrice * 0.60; 
    if (quantity >= 24)  return basePrice * 0.70; 
    if (quantity >= 12)  return basePrice * 0.80; 
    if (quantity >= 6)   return basePrice * 0.90; 
    return basePrice;
}

// --- Lifecycle Initialization Engine ---
document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();
    initScrollAnimations();
    checkInstaPromoVisibility();

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Handle return success/cancel status
    if (urlParams.get('success') === 'true') {
        localStorage.removeItem('sticker_cart');
        alert("Thank you for your order! Your payment was processed successfully.");
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    if (document.getElementById('products-grid')) {
        if (productId) {
            renderProductDetails(parseInt(productId));
        } else {
            renderCatalog(STICKER_PRODUCTS);
        }
    }

    if (document.getElementById('cart-items-hook')) {
        renderCart();
    }
});

function initScrollAnimations() {
    const targets = document.querySelectorAll('.home-section, .container, .blog-summary-card, .checkout-box, .review-card, .about-text');
    targets.forEach(sec => sec.classList.add('scroll-reveal'));

    window.globalScrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                window.globalScrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: "0px 0px -10px 0px" });

    targets.forEach(sec => window.globalScrollObserver.observe(sec));
    setTimeout(checkAboveTheFoldVisibility, 50);
}

function checkAboveTheFoldVisibility() {
    const reveals = document.querySelectorAll('.scroll-reveal:not(.active)');
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight * 0.9) {
            el.classList.add('active');
            if (window.globalScrollObserver) {
                window.globalScrollObserver.unobserve(el);
            }
        }
    });
}

// --- Cart Badge Management ---
function updateCartBadge() {
    const badge = document.getElementById('cart-count-badge') || document.querySelector('.cart-count-badge');
    if (!badge) return;

    const cart = JSON.parse(localStorage.getItem('sticker_cart')) || [];
    const totalCount = cart.reduce((sum, item) => sum + (parseInt(item.chosenQty) || 1), 0);

    if (totalCount > 0) {
        badge.textContent = totalCount;
        badge.style.display = 'inline-block';
    } else {
        badge.style.display = 'none';
    }
}

// --- Filter Engine & Side Panel ---
function toggleFilterPanel(open) {
    const panel = document.getElementById('filter-panel');
    const backdrop = document.getElementById('filter-backdrop');

    if (panel) {
        if (open) {
            panel.classList.add('open');
            if (backdrop) backdrop.classList.add('open');
        } else {
            panel.classList.remove('open');
            if (backdrop) backdrop.classList.remove('open');
        }
    }
}

function applyFilters() {
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
    const selectedColors = Array.from(document.querySelectorAll('input[name="color-filter"]:checked')).map(cb => cb.value);

    let filtered = STICKER_PRODUCTS.filter(p => !p.isExclusive);

    if (selectedCategories.length > 0) {
        filtered = filtered.filter(p => {
            if (Array.isArray(p.category)) {
                return p.category.some(cat => selectedCategories.includes(cat));
            }
            return selectedCategories.includes(p.category);
        });
    }

    if (selectedColors.length > 0) {
        filtered = filtered.filter(p => selectedColors.includes(p.color));
    }

    renderCatalog(filtered);
    renderActiveFilterBadges();
}

function renderActiveFilterBadges() {
    const badgesContainer = document.getElementById('active-filter-badges');
    if (!badgesContainer) return;

    badgesContainer.innerHTML = '';

    const selectedCategoryBoxes = document.querySelectorAll('input[name="category"]:checked');
    const selectedColorBoxes = document.querySelectorAll('input[name="color-filter"]:checked');

    selectedCategoryBoxes.forEach(cb => {
        const labelText = cb.parentElement.textContent.trim();
        const badge = document.createElement('span');
        badge.className = 'filter-badge';
        badge.innerHTML = `${labelText} <button onclick="removeIndividualFilter('category', '${cb.value}')">&times;</button>`;
        badgesContainer.appendChild(badge);
    });

    selectedColorBoxes.forEach(cb => {
        const labelText = cb.parentElement.textContent.trim();
        const badge = document.createElement('span');
        badge.className = 'filter-badge';
        badge.innerHTML = `${labelText} <button onclick="removeIndividualFilter('color-filter', '${cb.value}')">&times;</button>`;
        badgesContainer.appendChild(badge);
    });
}

function removeIndividualFilter(groupName, value) {
    const targetCheckbox = document.querySelector(`input[name="${groupName}"][value="${value}"]`);
    if (targetCheckbox) {
        targetCheckbox.checked = false;
        applyFilters();
    }
}

function renderCatalog(productsList) {
    const catalogGrid = document.getElementById('products-grid');
    const heroElement = document.getElementById('shop-hero-banner');
    
    if (heroElement) heroElement.style.display = 'block';
    if (!catalogGrid) return;
    catalogGrid.innerHTML = '';

    const publicProducts = productsList.filter(p => !p.isExclusive);

    if (publicProducts.length === 0) {
        catalogGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 40px 0; font-weight: 600; color: #64748b;">No stickers match your active filters.</p>`;
        return;
    }

    publicProducts.forEach(product => {
        const bestsellerBadge = product.isBestseller 
            ? `<div class="card-tape-badge">Bestseller</div>` 
            : '';

        const cardHtml = `
            <div class="product-card scroll-reveal ${product.isBestseller ? 'has-tape-badge' : ''}" onclick="location.href='products.html?id=${product.id}'">
                ${bestsellerBadge}
                <div class="product-img-wrapper">
                    <img src="${product.photos[0]}" alt="${product.name}" class="product-img">
                </div>
                <div class="product-info">
                    <h3 class="product-title" style="margin:0;">${product.name}</h3>
                    <p class="product-price" style="margin:0; font-weight:700;">$${product.price.toFixed(2)}</p>
                    <button class="quick-add-btn" onclick="event.stopPropagation(); quickAddCatalogItem(${product.id}, this);" aria-label="Quick Add to Cart">+ Add to Cart</button>
                </div>
            </div>
        `;
        catalogGrid.insertAdjacentHTML('beforeend', cardHtml);
    });

    if (window.globalScrollObserver) {
        const dynamicCards = catalogGrid.querySelectorAll('.product-card.scroll-reveal');
        dynamicCards.forEach(card => window.globalScrollObserver.observe(card));
    }
}

function triggerButtonCheckmark(btnElement, originalText) {
    if (!btnElement) return;
    const oldBg = btnElement.style.backgroundColor;
    const oldColor = btnElement.style.color;

    btnElement.innerText = "✓ Added!";
    btnElement.style.backgroundColor = "#2e7d32";
    btnElement.style.color = "#ffffff";

    setTimeout(() => {
        btnElement.innerText = originalText;
        btnElement.style.backgroundColor = oldBg;
        btnElement.style.color = oldColor;
    }, 1500);
}

function quickAddCatalogItem(productId, btnElement) {
    const product = STICKER_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    if (product.isCustomizable) {
        window.location.href = `products.html?id=${product.id}`;
        return;
    }

    let cart = JSON.parse(localStorage.getItem('sticker_cart')) || [];
    let existingIndex = cart.findIndex(item => item.id === productId && !item.customText);

    if (existingIndex > -1) {
        cart[existingIndex].chosenQty += 1;
        const unitCost = getTieredPricePerUnit(product.price, cart[existingIndex].chosenQty);
        cart[existingIndex].totalLineCost = unitCost * cart[existingIndex].chosenQty;
    } else {
        cart.push({
            id: product.id,
            stripePriceId: product.stripePriceId,
            name: product.name,
            photo: product.photos[0],
            chosenQty: 1,
            customText: "",
            totalLineCost: product.price
        });
    }

    localStorage.setItem('sticker_cart', JSON.stringify(cart));
    updateCartBadge();
    triggerButtonCheckmark(btnElement, "+ Add to Cart");
}

function renderProductDetails(id) {
    const product = STICKER_PRODUCTS.find(p => p.id === id);
    if (!product || product.isExclusive) return;

    const catalogElement = document.getElementById('catalog-view');
    const detailElement = document.getElementById('detail-view');
    const heroElement = document.getElementById('shop-hero-banner');
    const mainTitleElement = document.getElementById('page-main-title');

    if (catalogElement) catalogElement.style.display = 'none';
    if (detailElement) detailElement.style.display = 'block';
    if (heroElement) heroElement.style.display = 'none';
    if (mainTitleElement) mainTitleElement.innerText = product.name;

    const detailHook = document.getElementById('dynamic-product-content');
    if (!detailHook) return;
    
    let thumbsHtml = product.photos.map((photo, i) => `
        <img src="${photo}" class="thumb-item ${i === 0 ? 'active' : ''}" onclick="switchDetailPhoto(this, '${photo}')" alt="Product view ${i+1}">
     `).join('');

    let reviewsHtml = product.reviews.map(r => `
        <div class="review-item">
            <div class="review-stars">★★★★★</div>
            <p style="font-weight: 500; font-size:0.95rem;">"${r}"</p>
        </div>
     `).join('');

    let personalizationBoxHtml = '';
    if (product.isCustomizable) {
        personalizationBoxHtml = `
            <div class="form-group" style="margin: 20px 0;">
                <label style="font-size:0.85rem; font-weight:700; color:var(--brand-navy);">Custom Tag Text Wording (e.g. ELDER SMITH / SISTER JONES)</label>
                <input type="text" id="sticker-custom-text" maxlength="40" placeholder="Type name precisely here..." style="margin-top:5px;">
            </div>
        `;
    }

    detailHook.innerHTML = `
        <div class="product-media-column">
            <div class="main-display-frame">
                <img id="main-gallery-target" src="${product.photos[0]}" alt="${product.name}">
            </div>
            <div class="thumbnail-carousel-strip">${thumbsHtml}</div>
        </div>
        
        <div class="product-info-column">
            <h2>${product.name}</h2>
            <div class="detail-price" id="live-price-target">$${product.price.toFixed(2)}</div>
            <p class="detail-desc">${product.desc}</p>
            
            ${personalizationBoxHtml}

            <div class="form-group" style="margin-bottom:25px;">
                <label style="font-size:0.85rem; font-weight:700;">Select Pack Quantity</label>
                <select id="sticker-quantity-dropdown" onchange="updateLiveDetailsPrice(${product.price})" style="width:100%; padding:12px; border:1px solid var(--border-subtle); border-radius:6px; margin-top:5px; font-weight:700;">
                    <option value="1" selected>1 Sticker</option>
                    <option value="2">2 Stickers</option>
                    <option value="3">3 Stickers</option>
                    <option value="6">6 Stickers (10% wholesale discount)</option>
                    <option value="12">12 Stickers (20% wholesale discount)</option>
                    <option value="18">18 Stickers (20% wholesale discount)</option>
                    <option value="24">24 Stickers (30% wholesale discount)</option>
                    <option value="30">30 Stickers (30% wholesale discount)</option>
                    <option value="50">50 Stickers (40% wholesale rate)</option>
                    <option value="75">75 Stickers (40% wholesale rate)</option>
                    <option value="100">100 Stickers (50% wholesale bulk rate)</option>
                </select>
            </div>

            <button class="btn-cute" onclick="processAddToBag(${product.id}, this)" style="width:100%;">Add To Cart</button>

            <div class="reviews-section">
                <h3>Verified Product Feedback</h3>
                <div style="margin-top:15px;">${reviewsHtml}</div>
            </div>
        </div>
    `;
}

function switchDetailPhoto(element, targetUrl) {
    document.getElementById('main-gallery-target').src = targetUrl;
    document.querySelectorAll('.thumb-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
}

function updateLiveDetailsPrice(basePrice) {
    const qty = parseInt(document.getElementById('sticker-quantity-dropdown').value);
    const costPerUnit = getTieredPricePerUnit(basePrice, qty);
    const totalCost = costPerUnit * qty;
    document.getElementById('live-price-target').innerText = `$${totalCost.toFixed(2)} (Subtotal)`;
}

function processAddToBag(id, btnElement) {
    const product = STICKER_PRODUCTS.find(p => p.id === id);
    if (!product) return;

    const chosenQty = parseInt(document.getElementById('sticker-quantity-dropdown').value);
    const customText = product.isCustomizable ? document.getElementById('sticker-custom-text').value.trim() : "";

    if (product.isCustomizable && customText === "") {
        alert("Please specify custom name tag details before placing items into the cart!");
        return;
    }

    const unitCost = getTieredPricePerUnit(product.price, chosenQty);
    const totalLineCost = unitCost * chosenQty;

    let cart = JSON.parse(localStorage.getItem('sticker_cart')) || [];
    
    cart.push({
        id: product.id,
        stripePriceId: product.stripePriceId,
        name: product.name,
        photo: product.photos[0],
        chosenQty: chosenQty,
        customText: customText,
        totalLineCost: totalLineCost
    });

    localStorage.setItem('sticker_cart', JSON.stringify(cart));
    updateCartBadge();
    triggerButtonCheckmark(btnElement, "Add To Cart");

    if (document.getElementById('cart-items-hook')) {
        renderCart();
    }
}

// --- Cart View Engine ---
function renderCart() {
    const cartHook = document.getElementById('cart-items-hook');
    const totalHook = document.getElementById('cart-total-price');
    if (!cartHook) return;

    let cart = JSON.parse(localStorage.getItem('sticker_cart')) || [];

    if (cart.length === 0) {
        cartHook.innerHTML = `<p style="text-align:center; padding: 40px 0; font-weight: 500;">Your cart is currently empty.</p>`;
        if (totalHook) totalHook.innerText = "$0.00";
        checkInstaPromoVisibility();
        return;
    }

    cartHook.innerHTML = '';
    let totalCartDue = 0;

    cart.forEach((item, index) => {
        const currentLineCost = parseFloat(item.totalLineCost) || 0;
        totalCartDue += currentLineCost;
        
        let customLabel = item.customText ? `<p style="font-size:0.85rem; color:var(--brand-purple); margin:4px 0 0 0;">Customization: <strong>${item.customText}</strong></p>` : '';
        
        let qtyOptions = '';
        for (let qty = 1; qty <= 20; qty++) {
            const isSelected = (parseInt(item.chosenQty) === qty) ? 'selected' : '';
            qtyOptions += `<option value="${qty}" ${isSelected}>${qty}</option>`;
        }

        const itemHtml = `
            <div class="cart-item">
                <div style="display:flex; align-items:center; gap: 20px;">
                    <img src="${item.photo}" style="width:65px; height:65px; object-fit:cover; border-radius:6px; border: 1px solid var(--border-subtle);">
                    <div>
                        <h4 style="margin:0; font-family:var(--font-heading); text-transform:uppercase; font-size:0.95rem;">${item.name}</h4>
                        
                        <div style="margin-top: 6px; display: flex; align-items: center; gap: 8px;">
                            <label for="qty-select-${index}" style="font-size:0.85rem; color:#666;">Qty:</label>
                            <select id="qty-select-${index}" onchange="updateCartItemQuantity(${index}, this.value)" style="padding: 4px 8px; border: 1px solid var(--border-subtle); border-radius: 4px; font-weight: 600; cursor: pointer;">
                                ${qtyOptions}
                            </select>
                        </div>

                        ${customLabel}
                        <div style="color:var(--brand-purple); font-weight:700; margin-top:4px;">$${currentLineCost.toFixed(2)}</div>
                    </div>
                </div>
                <button onclick="removeFromCart(${index})" style="background:none; border:none; color:#c46262; cursor:pointer; font-weight:700; font-size:0.85rem; text-transform:uppercase;">Remove</button>
            </div>
        `;
        cartHook.insertAdjacentHTML('beforeend', itemHtml);
    });

    // --- Mystery Sticker Upsell ---
    const mysteryHtml = `
        <div style="margin-top: 24px; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 8px; background-color: var(--bg-soft, #fcfcfc); display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;">
            <div>
                <h4 style="margin: 0; font-family: var(--font-heading); text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.5px; color: var(--brand-navy);">Add a Mystery Sticker</h4>
                <p style="margin: 2px 0 0 0; font-size: 0.82rem; color: #64748b;">A surprise sticker from our shop added to your cart for <strong style="color: var(--brand-purple);">$1.99</strong></p>
            </div>
            <button onclick="addMysteryStickerToCart(this)" class="btn-cute" style="font-size: 0.8rem; padding: 8px 14px; width: auto; margin: 0;">
                + Add to Order
            </button>
        </div>
    `;
    cartHook.insertAdjacentHTML('beforeend', mysteryHtml);

    // Dynamic Promo Code Banner Visibility Call
    checkInstaPromoVisibility();

    if (totalHook) {
        totalHook.innerText = `$${totalCartDue.toFixed(2)}`;
    }
}

function addMysteryStickerToCart(btnElement) {
    const mysteryProduct = STICKER_PRODUCTS.find(p => p.id === 999);
    if (!mysteryProduct) return;

    let cart = JSON.parse(localStorage.getItem('sticker_cart')) || [];
    let existingIndex = cart.findIndex(item => item.id === 999);

    if (existingIndex > -1) {
        cart[existingIndex].chosenQty += 1;
        cart[existingIndex].totalLineCost = mysteryProduct.price * cart[existingIndex].chosenQty;
    } else {
        cart.push({
            id: mysteryProduct.id,
            stripePriceId: mysteryProduct.stripePriceId,
            name: mysteryProduct.name,
            photo: mysteryProduct.photos[0],
            chosenQty: 1,
            customText: "",
            totalLineCost: mysteryProduct.price
        });
    }

    localStorage.setItem('sticker_cart', JSON.stringify(cart));
    updateCartBadge();
    triggerButtonCheckmark(btnElement, "+ Add to Order");
    renderCart();
}

function updateCartItemQuantity(index, newQty) {
    let cart = JSON.parse(localStorage.getItem('sticker_cart')) || [];
    if (!cart[index]) return;

    const qty = parseInt(newQty) || 1;
    const product = STICKER_PRODUCTS.find(p => p.id === cart[index].id);
    const basePrice = product ? product.price : (cart[index].totalLineCost / (cart[index].chosenQty || 1));

    const unitCost = cart[index].id === 999 ? basePrice : getTieredPricePerUnit(basePrice, qty);
    
    cart[index].chosenQty = qty;
    cart[index].totalLineCost = unitCost * qty;

    localStorage.setItem('sticker_cart', JSON.stringify(cart));
    renderCart();
    updateCartBadge();
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('sticker_cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('sticker_cart', JSON.stringify(cart));
    renderCart();
    updateCartBadge();
}

// --- Dynamic Form Integration Handler (Stripe Checkout) ---
async function handleCheckout(event) {
    event.preventDefault();

    const submitBtn = event.target.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = "Processing...";
    }

    let cart = JSON.parse(localStorage.getItem('sticker_cart')) || [];
    if (cart.length === 0) {
        alert("Your cart is currently empty.");
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerText = "Proceed to Secure Payment";
        }
        return;
    }

    const clientEmail = document.getElementById('cust-email')?.value || '';

    try {
        const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cart: cart,
                customerEmail: clientEmail
            }),
        });

        const data = await response.json();

        if (response.ok && data.url) {
            window.location.href = data.url;
        } else {
            alert("Error creating checkout session: " + (data.error || "Unknown error"));
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerText = "Proceed to Secure Payment";
            }
        }
    } catch (err) {
        console.error("Checkout Request Error:", err);
        alert("Failed to connect to checkout service. Please ensure serverless functions are deployed.");
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerText = "Proceed to Secure Payment";
        }
    }
}

// --- Reviews Infinite Carousel ---
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('reviews-strip-track');
    const btnLeft = document.getElementById('reviews-scroll-left');
    const btnRight = document.getElementById('reviews-scroll-right');

    if (!track) return;

    const originalCards = Array.from(track.children);
    
    originalCards.forEach(card => {
        const cloneAfter = card.cloneNode(true);
        track.appendChild(cloneAfter);
    });

    originalCards.slice().reverse().forEach(card => {
        const cloneBefore = card.cloneNode(true);
        track.insertBefore(cloneBefore, track.firstChild);
    });

    const getCardOffset = () => {
        const firstCard = track.querySelector('.review-card');
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.gap) || 16;
        return firstCard.offsetWidth + gap;
    };

    const centerInitialCard = () => {
        const cardWidth = getCardOffset();
        const setWidth = originalCards.length * cardWidth;
        
        const trackWidth = track.clientWidth;
        const singleCardWidth = track.querySelector('.review-card').offsetWidth;
        const centerPadding = (trackWidth - singleCardWidth) / 2;

        track.style.scrollBehavior = 'auto';
        track.scrollLeft = setWidth - centerPadding;
        track.style.scrollBehavior = 'smooth';
    };

    centerInitialCard();
    window.addEventListener('resize', centerInitialCard);

    function slowScrollTrack(container, distance, duration) {
        const startPos = container.scrollLeft;
        const startTime = performance.now();

        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        function animateScroll(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const ease = easeInOutQuad(progress);

            container.scrollLeft = startPos + distance * ease;

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);
    }

    if (btnLeft && btnRight) {
        const SCROLL_DURATION = 500;

        btnLeft.addEventListener('click', () => {
            slowScrollTrack(track, -getCardOffset(), SCROLL_DURATION);
        });

        btnRight.addEventListener('click', () => {
            slowScrollTrack(track, getCardOffset(), SCROLL_DURATION);
        });
    }

    let isResetting = false;

    track.addEventListener('scroll', () => {
        if (isResetting) return;

        const maxScroll = track.scrollWidth - track.clientWidth;
        const currentScroll = track.scrollLeft;
        const setWidth = originalCards.length * getCardOffset();

        if (currentScroll >= maxScroll - 50) {
            isResetting = true;
            track.style.scrollBehavior = 'auto';
            track.scrollLeft = currentScroll - setWidth;
            track.style.scrollBehavior = 'smooth';
            isResetting = false;
        }

        if (currentScroll <= 50) {
            isResetting = true;
            track.style.scrollBehavior = 'auto';
            track.scrollLeft = currentScroll + setWidth;
            track.style.scrollBehavior = 'smooth';
            isResetting = false;
        }
    });
});

// --- FAQ Chatbot Handler ---
document.addEventListener('DOMContentLoaded', () => {
  const FAQ_DATA = [
    {
      id: 'shipping',
      question: 'How long does shipping take?',
      answer: 'Orders are processed in 1-2 weeks. Standard US shipping usually takes 3-5 business days!'
    },
    {
      id: 'waterproof',
      question: 'Are the stickers waterproof?',
      answer: 'Yes! All of our stickers are 100% waterproof, and scratch resistant. We recommend washing your water bottle by hand, since the heat of a dishwasher could potentially cause peeling.'
    },
    {
      id: 'discounts',
      question: 'Do you offer bulk or discount codes?',
      answer: 'Yes! You can enter coupon codes right at checkout. For bulk/church orders, send us a message via our Contact page.'
    },
    {
      id: 'returns',
      question: 'Can I track my order?',
      answer: 'To keep our costs low, we do not offer tracking. We do, however, offer tracking on larger orders for a more expensive shipping fee. Submit bulk/custom orders on our Contact Us page!'
    },
    {
      id: 'coupon',
      question: 'Do you have any sales going on right now?',
      answer: 'Yes, we run promotions all the time! Check out our instagram (@stickwithjesusco) to see our latest news.'
    }
  ];

  const toggleBtn = document.getElementById('chatbot-toggle-btn');
  const closeBtn = document.getElementById('chatbot-close-btn');
  const chatWindow = document.getElementById('chatbot-window');
  const messagesContainer = document.getElementById('chatbot-messages');

  let isOpen = false;

  function toggleChat() {
    isOpen = !isOpen;
    chatWindow.classList.toggle('chatbot-hidden', !isOpen);
    
    if (isOpen && messagesContainer.children.length === 0) {
      startChat();
    }
  }

  if (toggleBtn) toggleBtn.addEventListener('click', toggleChat);
  if (closeBtn) closeBtn.addEventListener('click', toggleChat);

  function startChat() {
    messagesContainer.innerHTML = '';
    addBotBubble('Hi there! 👋 Welcome to Stick With Jesus. How can I help you today?');
    showOptions();
  }

  function addBotBubble(text) {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble bot';
    bubble.textContent = text;
    messagesContainer.appendChild(bubble);
    scrollToBottom();
  }

  function addUserBubble(text) {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble user';
    bubble.textContent = text;
    messagesContainer.appendChild(bubble);
    scrollToBottom();
  }

  function showOptions() {
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'chat-options';

    FAQ_DATA.forEach(faq => {
      const btn = document.createElement('button');
      btn.className = 'chat-option-btn';
      btn.textContent = faq.question;
      btn.onclick = () => handleQuestionClick(faq, optionsContainer);
      optionsContainer.appendChild(btn);
    });

    messagesContainer.appendChild(optionsContainer);
    scrollToBottom();
  }

  function handleQuestionClick(faq, optionsContainer) {
    optionsContainer.remove();
    addUserBubble(faq.question);

    setTimeout(() => {
      addBotBubble(faq.answer);
      
      setTimeout(() => {
        const resetContainer = document.createElement('div');
        resetContainer.className = 'chat-options';
        
        const resetBtn = document.createElement('button');
        resetBtn.className = 'chat-option-btn';
        resetBtn.style.textAlign = 'center';
        resetBtn.textContent = 'Ask another question...';
        resetBtn.onclick = () => {
          resetContainer.remove();
          showOptions();
        };

        resetContainer.appendChild(resetBtn);
        messagesContainer.appendChild(resetContainer);
        scrollToBottom();
      }, 400);

    }, 500);
  }

  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
});

// --- Promo Banner Handler ---
document.addEventListener('DOMContentLoaded', () => {
  const isProductsPage = window.location.pathname.includes('products.html') || window.location.pathname === '/products';
  
  if (isProductsPage) {
    const hasSeenBanner = localStorage.getItem('swj_promo_seen');
    const hasClaimedDiscount = localStorage.getItem('swj_10off_claimed');

    if (!hasSeenBanner && !hasClaimedDiscount) {
      setTimeout(() => {
        const banner = document.getElementById('promo-banner');
        if (banner) {
          banner.classList.remove('promo-banner-hidden');
          localStorage.setItem('swj_promo_seen', 'true');
        }
      }, 5000);
    }
  }

  const banner = document.getElementById('promo-banner');
  const closeBtn = document.getElementById('promo-banner-close');
  const instaBtn = document.getElementById('promo-insta-btn');

  function closeBanner() {
    if (banner) {
      banner.classList.add('promo-banner-hidden');
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', closeBanner);

  if (instaBtn) {
    instaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      localStorage.setItem('swj_10off_claimed', 'true');
      
      const bannerText = document.getElementById('promo-banner-text');
      if (bannerText) {
        bannerText.innerHTML = `Use promo code <strong style="background: #fff; padding: 2px 8px; border-radius: 4px; color: var(--brand-purple);">INSTA10</strong> at checkout for 10% off!`;
      }
      
      window.open('https://www.instagram.com/stickwithjesusco?igsh=MXc4MDY1a29heGw3aw%3D%3D&utm_source=qr', '_blank');
    });
  }
});