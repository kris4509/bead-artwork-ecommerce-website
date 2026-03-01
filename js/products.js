const products = {
    '1': {
        title: 'Vibrant Rainbow Spiral Circular Beaded Mat',
        price: 'KES 950',
        image: 'assets/rainbow_spiral.jpg',
        description: 'A stunning centerpiece featuring a tight spiral of vibrant multi-colored glass beads. Each layer represents the diverse spirit of Kenyan heritage.',
        materials: 'Multi-colored glass beads, leather-backed reinforcement, high-strength nylon thread.',
        dimensions: '35cm Diameter',
        category: 'Spirals',
        featured: true,
        badge: 'Popular'
    },
    '2': {
        title: 'Artisan Feather Motif Mat - Earth Tones',
        price: 'KES 1,000',
        image: 'assets/feather_brown.jpg',
        description: 'Elegant earth-toned mat featuring a sophisticated feather motif. Perfect for adding a natural, organic feel to your table setting.',
        materials: 'Amber, brown, and cream glass beads on sisal backing.',
        dimensions: '40cm Diameter',
        category: 'Patterns',
        featured: true
    },
    '3': {
        title: 'Artisan Rainbow Feather Beaded Wall Decor',
        price: 'KES 1,000',
        image: 'assets/feather_rainbow.jpg',
        description: 'A masterpiece of beadwork, this piece uses a rainbow of colors in a flowing feather pattern. Can be used as a premium placemat or mounted as wall art.',
        materials: 'Premium vibrant glass beads, hand-braided border, fabric backing.',
        dimensions: '40cm Diameter',
        category: 'Patterns',
        featured: false
    },
    '4': {
        title: 'Classic Spiral Hand-Beaded Mat (Black & Gold)',
        price: 'KES 900',
        image: 'assets/white_gold_spiral.jpg',
        description: 'A timeless design featuring a clean monochrome spiral with subtle gold highlights. Perfect for sophisticated and modern home decor.',
        materials: 'Black, white, and metallic gold beads.',
        dimensions: '35cm Diameter',
        category: 'Spirals',
        featured: false
    },
    '5': {
        title: 'Midnight Black Hand-Beaded Premium Mat',
        price: 'KES 1,000',
        image: 'assets/midnight_black.jpg',
        description: 'A luxurious, jet-black beaded mat with a subtle shimmer. Its minimalist design makes it a versatile piece for high-end table settings and modern interiors.',
        materials: 'High-quality black glass beads, premium leather backing.',
        dimensions: '35cm Diameter',
        category: 'Minimalist',
        featured: true,
        badge: 'Premium'
    },
    '6': {
        title: 'Deep Ocean Blue Spiral Beaded Mat',
        price: 'KES 950',
        image: 'assets/ocean_blue_spiral.jpg',
        description: 'A calming spiral of deep blue and teal beads, evocative of the Indian Ocean. Hand-strung with precision for a smooth, high-end finish.',
        materials: 'Multi-toned blue glass beads, durable fiber backing.',
        dimensions: '35cm Diameter',
        category: 'Spirals',
        featured: false
    },
    '7': {
        title: 'Large Spiral Woven Tray - Emerald Green',
        price: 'KES 1,200',
        image: 'assets/green_woven_tray.jpg',
        description: 'A vibrantly colored woven tray featuring a mesmerizing spiral pattern. Perfect as a wall statement piece or a unique decorative tray.',
        materials: 'Naturally dyed sisal fibers, expert hand-weaving.',
        dimensions: '45cm Diameter',
        category: 'Woven',
        featured: false
    },
    '8': {
        title: 'Minimalist Black & White Target Beaded Set',
        price: 'KES 950',
        image: 'assets/bw_target_mats.jpg',
        description: 'A clean, modern take on traditional beadwork. These circular mats feature bold black and white rings, creating a striking visual contrast.',
        materials: 'High-contrast glass beads, leather-reinforced edges.',
        dimensions: '35cm Diameter',
        category: 'Minimalist',
        featured: false
    },
    '9': {
        title: 'Intricate Electric Blue & Gold Beaded Spiral',
        price: 'KES 1,100',
        image: 'assets/electric_blue_spiral.jpg',
        description: 'A masterpiece of intricate beadwork, combining electric blue tones with subtle gold highlights for a truly regal appearance.',
        materials: 'Premium glass beads, hand-braided border reinforcement.',
        dimensions: '35cm Diameter',
        category: 'Spirals',
        featured: false
    },
    '10': {
        title: 'Classic Brown Border Beaded Centerpiece',
        price: 'KES 950',
        image: 'assets/brown_border_spiral.jpg',
        description: 'A sophisticated centerpiece with a rich brown leather-like border and a clean, minimal beaded center. Blends traditional and modern styles seamlessly.',
        materials: 'Natural earth-tone beads, thick braided border.',
        dimensions: '35cm Diameter',
        category: 'Minimalist',
        featured: false
    },
    '11': {
        title: 'Luxury Gold & Bronze Stacked Beaded Set (Full Set)',
        price: 'KES 3,500',
        image: 'assets/gold_luxury_stack.jpg',
        description: 'A premium set of stacked beaded mats, featuring an opulent blend of gold, bronze, and cream beads. Designed for those who appreciate true luxury and heritage.',
        materials: 'Metallic-coated glass beads, premium leather borders, decorative hand-braiding.',
        dimensions: 'Set of 4 (35cm each)',
        category: 'Sets',
        featured: true,
        badge: 'Best Seller'
    },
    '12': {
        title: 'Prism Speckled Artisan Beaded Mat',
        price: 'KES 950',
        image: 'assets/speckled_rainbow.jpg',
        description: 'A playful yet sophisticated design featuring a constellation of multi-colored "speckled" beads. Each mat is unique due to the hand-mixed bead application.',
        materials: 'Mixed vibrant glass beads, white fiber base.',
        dimensions: '35cm Diameter',
        category: 'Patterns',
        featured: false
    },
    '13': {
        title: 'Artisan Gold Mosaic Hand-Beaded Mat',
        price: 'KES 1,000',
        image: 'assets/gold_mosaic_set.jpg',
        description: 'A detailed mosaic pattern that captures the light beautifully. The gold and amber tones create a warm, inviting atmosphere for any dining experience.',
        materials: 'Premium gold-line beads, amber glass, durable underlay.',
        dimensions: '35cm Diameter',
        category: 'Patterns',
        featured: false
    },
    '14': {
        title: 'Sunset Orange Spiral Artisan Mat',
        price: 'KES 950',
        image: 'assets/sunset_orange_spiral.jpg',
        description: 'A warm and energetic design featuring a radiant spiral of orange, yellow, and red glass beads. Perfect for brightening up any dining space.',
        materials: 'Sun-toned glass beads, reinforced fiber backing.',
        dimensions: '35cm Diameter',
        category: 'Spirals',
        featured: false
    },
    '15': {
        title: 'Teal Harmony Hand-Beaded Mat',
        price: 'KES 1,000',
        image: 'assets/teal_harmony_mat.jpg',
        description: 'A calming and balanced design using various shades of teal and sea-green beads. Inspired by the serene coastal waters of Kenya.',
        materials: 'Teal glass beads, high-strength nylon thread, fabric base.',
        dimensions: '40cm Diameter',
        category: 'Minimalist',
        featured: false
    },
    '16': {
        title: 'Tribal Bronze Pattern Centerpiece',
        price: 'KES 1,100',
        image: 'assets/tribal_bronze_pattern.jpg',
        description: 'A sophisticated piece featuring traditional tribal patterns in rich bronze and metallic tones. Adds a regal and authentic touch to your home.',
        materials: 'Bronze-coated glass beads, leather-backed reinforcement.',
        dimensions: '35cm Diameter',
        category: 'Patterns',
        featured: true,
        badge: 'New Arrival'
    },
    '17': {
        title: 'Royal Purple Spiral Premium Mat',
        price: 'KES 1,000',
        image: 'assets/royal_purple_spiral.jpg',
        description: 'A luxurious deep purple spiral that exudes elegance. Hand-crafted with premium beads for a superior finish and texture.',
        materials: 'Amethyst-toned glass beads, durable sisal backing.',
        dimensions: '35cm Diameter',
        category: 'Spirals',
        featured: false
    },
    '18': {
        title: 'Emerald Forest Artisan Beaded Mat',
        price: 'KES 950',
        image: 'assets/emerald_forest_mat.jpg',
        description: 'Deep forest green beads arranged in a mesmerizing pattern. Evokes the lush landscapes of the Kenyan highlands.',
        materials: 'Emerald green glass beads, hand-braided border.',
        dimensions: '35cm Diameter',
        category: 'Minimalist',
        featured: false
    },
    '19': {
        title: 'Authentic Kenyan Beaded Mat #19',
        price: 'KES 950',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.30.jpeg',
        description: 'A beautiful new addition to our collection, featuring intricate handcrafted beadwork and vibrant colors designed to elevate your dining space.',
        materials: 'Premium glass beads, durable backing.',
        dimensions: '35cm Diameter',
        category: 'Newly Added',
        featured: false
    },
    '20': {
        title: 'Authentic Kenyan Beaded Mat #20',
        price: 'KES 950',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.33.jpeg',
        description: 'A beautiful new addition to our collection, featuring intricate handcrafted beadwork and vibrant colors designed to elevate your dining space.',
        materials: 'Premium glass beads, durable backing.',
        dimensions: '35cm Diameter',
        category: 'Newly Added',
        featured: false
    },
    '21': {
        title: 'Authentic Kenyan Beaded Mat #21',
        price: 'KES 950',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.33_1.jpeg',
        description: 'A beautiful new addition to our collection, featuring intricate handcrafted beadwork and vibrant colors designed to elevate your dining space.',
        materials: 'Premium glass beads, durable backing.',
        dimensions: '35cm Diameter',
        category: 'Newly Added',
        featured: false
    },
    '22': {
        title: 'Authentic Kenyan Beaded Mat #22',
        price: 'KES 950',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.33_2.jpeg',
        description: 'A beautiful new addition to our collection, featuring intricate handcrafted beadwork and vibrant colors designed to elevate your dining space.',
        materials: 'Premium glass beads, durable backing.',
        dimensions: '35cm Diameter',
        category: 'Newly Added',
        featured: false
    },
    '23': {
        title: 'Green Feather Beaded Mirror/Clock Frame',
        price: 'From KES 1,800',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.34.jpeg',
        description: 'A stunning handcrafted beaded frame featuring elegant green and yellow feather patterns. Perfect as a mirror frame or clock frame. Available sizes: 16" (KES 1,800) | 18" (KES 2,000) | 20" (KES 2,200) | 22" (KES 2,400) | 24" (KES 2,600).',
        materials: 'Premium glass beads, leather-wrapped border, durable backing.',
        dimensions: '16" to 24" available',
        category: 'Frames',
        featured: false
    },
    '24': {
        title: 'Authentic Kenyan Beaded Mat #24',
        price: 'KES 950',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.34_1.jpeg',
        description: 'A beautiful new addition to our collection, featuring intricate handcrafted beadwork and vibrant colors designed to elevate your dining space.',
        materials: 'Premium glass beads, durable backing.',
        dimensions: '35cm Diameter',
        category: 'Newly Added',
        featured: false
    },
    '25': {
        title: 'Authentic Kenyan Beaded Mat #25',
        price: 'KES 950',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.34_2.jpeg',
        description: 'A beautiful new addition to our collection, featuring intricate handcrafted beadwork and vibrant colors designed to elevate your dining space.',
        materials: 'Premium glass beads, durable backing.',
        dimensions: '35cm Diameter',
        category: 'Newly Added',
        featured: false
    },
    '26': {
        title: 'Rainbow Spiral Beaded Mirror Frame',
        price: 'From KES 1,800',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.34_3.jpeg',
        description: 'A vibrant rainbow-colored beaded mirror frame with bold spiral color bands in red, blue, orange, yellow, and green. A true statement piece for any room. Available sizes: 16" (KES 1,800) | 18" (KES 2,000) | 20" (KES 2,200) | 22" (KES 2,400) | 24" (KES 2,600).',
        materials: 'Premium glass beads, leather-wrapped border, mirror glass insert.',
        dimensions: '16" to 24" available',
        category: 'Frames',
        featured: false
    },
    '27': {
        title: 'Authentic Kenyan Beaded Mat #27',
        price: 'KES 950',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.35.jpeg',
        description: 'A beautiful new addition to our collection, featuring intricate handcrafted beadwork and vibrant colors designed to elevate your dining space.',
        materials: 'Premium glass beads, durable backing.',
        dimensions: '35cm Diameter',
        category: 'Newly Added',
        featured: false
    },
    '28': {
        title: 'Sunset Feather Beaded Mirror/Clock Frame',
        price: 'From KES 1,800',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.35_1.jpeg',
        description: 'Warm orange, red, and gold feather beadwork on a handcrafted circular frame. Ideal as a decorative mirror or clock frame. Available sizes: 16" (KES 1,800) | 18" (KES 2,000) | 20" (KES 2,200) | 22" (KES 2,400) | 24" (KES 2,600).',
        materials: 'Premium glass beads, leather-wrapped border, durable backing.',
        dimensions: '16" to 24" available',
        category: 'Frames',
        featured: false
    },
    '29': {
        title: 'Authentic Kenyan Beaded Mat #29',
        price: 'KES 950',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.35_2.jpeg',
        description: 'A beautiful new addition to our collection, featuring intricate handcrafted beadwork and vibrant colors designed to elevate your dining space.',
        materials: 'Premium glass beads, durable backing.',
        dimensions: '35cm Diameter',
        category: 'Newly Added',
        featured: false
    },
    '30': {
        title: 'Authentic Kenyan Beaded Mat #30',
        price: 'KES 950',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.36.jpeg',
        description: 'A beautiful new addition to our collection, featuring intricate handcrafted beadwork and vibrant colors designed to elevate your dining space.',
        materials: 'Premium glass beads, durable backing.',
        dimensions: '35cm Diameter',
        category: 'Newly Added',
        featured: false
    },
    '31': {
        title: 'Authentic Kenyan Beaded Mat #31',
        price: 'KES 950',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.36_1.jpeg',
        description: 'A beautiful new addition to our collection, featuring intricate handcrafted beadwork and vibrant colors designed to elevate your dining space.',
        materials: 'Premium glass beads, durable backing.',
        dimensions: '35cm Diameter',
        category: 'Newly Added',
        featured: false
    },
    '32': {
        title: 'Authentic Kenyan Beaded Mat #32',
        price: 'KES 950',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.36_2.jpeg',
        description: 'A beautiful new addition to our collection, featuring intricate handcrafted beadwork and vibrant colors designed to elevate your dining space.',
        materials: 'Premium glass beads, durable backing.',
        dimensions: '35cm Diameter',
        category: 'Newly Added',
        featured: false
    },
    '33': {
        title: 'Authentic Kenyan Beaded Mat #33',
        price: 'KES 950',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.36_3.jpeg',
        description: 'A beautiful new addition to our collection, featuring intricate handcrafted beadwork and vibrant colors designed to elevate your dining space.',
        materials: 'Premium glass beads, durable backing.',
        dimensions: '35cm Diameter',
        category: 'Newly Added',
        featured: false
    },
    '34': {
        title: 'Assorted Beaded Frames Collection (Set of 3)',
        price: 'From KES 1,800 each',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.37.jpeg',
        description: 'A curated trio of handcrafted beaded frames featuring colorful feather, golden autumn, and earth-tone designs. Each can serve as a mirror or clock frame. Available sizes: 16" (KES 1,800) | 18" (KES 2,000) | 20" (KES 2,200) | 22" (KES 2,400) | 24" (KES 2,600).',
        materials: 'Premium glass beads, leather-wrapped border, durable backing.',
        dimensions: '16" to 24" available',
        category: 'Frames',
        featured: false
    },
    '35': {
        title: 'Authentic Kenyan Beaded Mat #35',
        price: 'KES 950',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.37_1.jpeg',
        description: 'A beautiful new addition to our collection, featuring intricate handcrafted beadwork and vibrant colors designed to elevate your dining space.',
        materials: 'Premium glass beads, durable backing.',
        dimensions: '35cm Diameter',
        category: 'Newly Added',
        featured: false
    },
    '36': {
        title: 'Authentic Kenyan Beaded Mat #36',
        price: 'KES 950',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.37_2.jpeg',
        description: 'A beautiful new addition to our collection, featuring intricate handcrafted beadwork and vibrant colors designed to elevate your dining space.',
        materials: 'Premium glass beads, durable backing.',
        dimensions: '35cm Diameter',
        category: 'Newly Added',
        featured: false
    },
    '37': {
        title: 'Kenyan Flag Beaded Wall Clock',
        price: 'From KES 1,800',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.37_3.jpeg',
        description: 'A magnificent wall clock adorned with green, red, and white feather beadwork inspired by Kenyan heritage. Fully functional quartz clock movement. Available sizes: 16" (KES 1,800) | 18" (KES 2,000) | 20" (KES 2,200) | 22" (KES 2,400) | 24" (KES 2,600).',
        materials: 'Premium glass beads, leather-wrapped border, quartz clock mechanism.',
        dimensions: '16" to 24" available',
        category: 'Frames',
        featured: false
    },
    '38': {
        title: 'Authentic Kenyan Beaded Mat #38',
        price: 'KES 950',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.38.jpeg',
        description: 'A beautiful new addition to our collection, featuring intricate handcrafted beadwork and vibrant colors designed to elevate your dining space.',
        materials: 'Premium glass beads, durable backing.',
        dimensions: '35cm Diameter',
        category: 'Newly Added',
        featured: false
    },
    '39': {
        title: 'Ivory and Gold Beaded Mirror/Clock Frame',
        price: 'From KES 1,800',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.38_1.jpeg',
        description: 'A minimalist yet elegant frame in white and gold striped beadwork. Perfect for modern interiors as a mirror or clock frame. Available sizes: 16" (KES 1,800) | 18" (KES 2,000) | 20" (KES 2,200) | 22" (KES 2,400) | 24" (KES 2,600).',
        materials: 'Premium glass beads, leather-wrapped border, durable backing.',
        dimensions: '16" to 24" available',
        category: 'Frames',
        featured: false
    },
    '40': {
        title: 'Gold Mosaic Beaded Mirror Frame',
        price: 'From KES 1,800',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.38_2.jpeg',
        description: 'A luxurious large mirror frame with intricate gold and white mosaic beadwork. A premium centerpiece for living rooms and entryways. Available sizes: 16" (KES 1,800) | 18" (KES 2,000) | 20" (KES 2,200) | 22" (KES 2,400) | 24" (KES 2,600).',
        materials: 'Premium glass beads, leather-wrapped border, mirror glass insert.',
        dimensions: '16" to 24" available',
        category: 'Frames',
        featured: false
    },
    '41': {
        title: 'Bronze Feather Beaded Mirror Frames',
        price: 'From KES 1,800',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.38_3.jpeg',
        description: 'Elegant white and bronze feather-patterned beaded mirror frames, available in multiple sizes. A timeless decorative piece. Available sizes: 16" (KES 1,800) | 18" (KES 2,000) | 20" (KES 2,200) | 22" (KES 2,400) | 24" (KES 2,600).',
        materials: 'Premium glass beads, leather-wrapped border, mirror glass insert.',
        dimensions: '16" to 24" available',
        category: 'Frames',
        featured: false
    },
    '42': {
        title: 'Authentic Kenyan Beaded Mat #42',
        price: 'KES 950',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.39.jpeg',
        description: 'A beautiful new addition to our collection, featuring intricate handcrafted beadwork and vibrant colors designed to elevate your dining space.',
        materials: 'Premium glass beads, durable backing.',
        dimensions: '35cm Diameter',
        category: 'Newly Added',
        featured: false
    },
    '43': {
        title: 'Authentic Kenyan Beaded Mat #43',
        price: 'KES 950',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.39_1.jpeg',
        description: 'A beautiful new addition to our collection, featuring intricate handcrafted beadwork and vibrant colors designed to elevate your dining space.',
        materials: 'Premium glass beads, durable backing.',
        dimensions: '35cm Diameter',
        category: 'Newly Added',
        featured: false
    },
    '44': {
        title: 'Rainbow Feather Beaded Wall Clock',
        price: 'From KES 1,800',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.39_2.jpeg',
        description: 'A stunning handcrafted wall clock with vibrant multicolored feather beadwork in every color of the rainbow. A show-stopping functional art piece. Available sizes: 16" (KES 1,800) | 18" (KES 2,000) | 20" (KES 2,200) | 22" (KES 2,400) | 24" (KES 2,600).',
        materials: 'Premium glass beads, leather-wrapped border, quartz clock mechanism.',
        dimensions: '16" to 24" available',
        category: 'Frames',
        featured: false
    },
    '45': {
        title: 'Authentic Kenyan Beaded Mat #45',
        price: 'KES 950',
        image: 'assets/WhatsApp_Image_2026-02-28_at_19.46.40.jpeg',
        description: 'A beautiful new addition to our collection, featuring intricate handcrafted beadwork and vibrant colors designed to elevate your dining space.',
        materials: 'Premium glass beads, durable backing.',
        dimensions: '35cm Diameter',
        category: 'Newly Added',
        featured: false
    }

};

window.asiliProducts = products;
