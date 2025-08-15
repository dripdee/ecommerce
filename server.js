// --- Demo product data (move to DB for production) ---
const PRODUCTS = [
    { id: 1, name: "Oversized Graphic Tee", price: 349, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop", desc: "Viral print, 100% cotton. #StreetStyle", tag: "New", category: "T-Shirts", rating: 4.5 },
    { id: 2, name: "Denim Shacket", price: 999, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop", desc: "Unisex, Y2K vibes. Layer up!", tag: "Hot", category: "Jackets", rating: 4.2 },
    { id: 3, name: "Chunky Sneakers", price: 1199, img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800&auto=format&fit=crop", desc: "All-day comfort, TikTok approved.", tag: "Trending", category: "Sneakers", rating: 4.7 },
    { id: 4, name: "Retro Sunglasses", price: 299, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800&auto=format&fit=crop", desc: "UV400, festival ready.", tag: "New", category: "Sunglasses", rating: 4.1 },
    { id: 5, name: "Canvas Tote Bag", price: 249, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop", desc: "Eco, aesthetic, fits your iPad.", tag: "Eco", category: "Totes", rating: 4.0 },
    { id: 6, name: "Tie-Dye Crop Top", price: 399, img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", desc: "Gen-Z fav, pastel shades.", tag: "Trending", category: "T-Shirts", rating: 4.6 },
    { id: 7, name: "Varsity Bomber", price: 1499, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop", desc: "College cool, limited drop.", tag: "Hot", category: "Jackets", rating: 4.8 },
    { id: 8, name: "Platform Sneakers", price: 899, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800&auto=format&fit=crop", desc: "Add height, add hype.", tag: "Trending", category: "Sneakers", rating: 4.3 },
    { id: 9, name: "Oval Sunnies", price: 399, img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=800&auto=format&fit=crop", desc: "Retro, Y2K, Insta-ready.", tag: "New", category: "Sunglasses", rating: 4.4 },
    { id: 10, name: "Minimalist Tote", price: 299, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop", desc: "Clean, fits all essentials.", tag: "Eco", category: "Totes", rating: 4.2 },
    { id: 11, name: "Pastel Hoodie", price: 799, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop", desc: "Soft, cozy, IG aesthetic.", tag: "New", category: "T-Shirts", rating: 4.9 },
    { id: 12, name: "Streetstyle Windbreaker", price: 1299, img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", desc: "Waterproof, bold colors.", tag: "Hot", category: "Jackets", rating: 4.5 },
    { id: 13, name: "Classic White Sneakers", price: 1099, img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=800&auto=format&fit=crop", desc: "Minimal, goes with everything.", tag: "Trending", category: "Sneakers", rating: 4.7 },
    { id: 14, name: "Aviator Shades", price: 499, img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", desc: "Timeless, unisex.", tag: "New", category: "Sunglasses", rating: 4.6 },
    { id: 15, name: "Canvas Shopper", price: 349, img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=800&auto=format&fit=crop", desc: "Big, bold, sustainable.", tag: "Eco", category: "Totes", rating: 4.3 },
    // Kids Section Products
    { id: 16, name: "Kids Rainbow T-Shirt", price: 199, img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop", desc: "Colorful, fun, 100% cotton.", tag: "New", category: "Kids", rating: 4.8 },
    { id: 17, name: "Kids Denim Overalls", price: 599, img: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=800&auto=format&fit=crop", desc: "Comfy & cute, adjustable straps.", tag: "Hot", category: "Kids", rating: 4.6 },
    { id: 18, name: "Kids Light-Up Sneakers", price: 799, img: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=800&auto=format&fit=crop", desc: "LED lights, velcro closure.", tag: "Trending", category: "Kids", rating: 4.9 },
    { id: 19, name: "Kids Unicorn Hoodie", price: 449, img: "https://images.unsplash.com/photo-1578662996442-48f60103fc27?q=80&w=800&auto=format&fit=crop", desc: "Magical design, super soft.", tag: "New", category: "Kids", rating: 4.7 },
    { id: 20, name: "Kids Cartoon Backpack", price: 349, img: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop", desc: "Fun prints, lots of pockets.", tag: "Hot", category: "Kids", rating: 4.5 },
    { id: 21, name: "Kids Dinosaur Jacket", price: 699, img: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&w=800&auto=format&fit=crop", desc: "3D spikes, warm & waterproof.", tag: "Trending", category: "Kids", rating: 4.8 },
    { id: 22, name: "Kids Princess Dress", price: 549, img: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=800&auto=format&fit=crop", desc: "Sparkly tulle, party perfect.", tag: "New", category: "Kids", rating: 4.6 },
    { id: 23, name: "Kids Superhero Cape", price: 249, img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop", desc: "Reversible, velcro closure.", tag: "Hot", category: "Kids", rating: 4.4 }
];


const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from "public" folder
app.use(express.static('public'));

// Products API with filtering
app.get('/api/products', (req, res) => {
    let { priceMax, category, tag, rating, search } = req.query;
    let filtered = PRODUCTS.slice();
    if (priceMax) filtered = filtered.filter(p => p.price <= Number(priceMax));
    if (category) filtered = filtered.filter(p => p.category === category);
    if (tag) filtered = filtered.filter(p => p.tag === tag);
    if (rating) filtered = filtered.filter(p => p.rating >= Number(rating));
    if (search) filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase()));
    res.json(filtered);
});

// Mock depot endpoint — supports only `/api/depot`
app.get('/api/depot', (req, res) => {
    res.json({
        depotName: "Central Depot",
        location: {
            lat: 28.6139,
            lon: 77.2090
        },
        message: "Depot location fetched successfully."
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`✅ Try: http://localhost:${PORT}/depot or http://localhost:${PORT}/api/depot`);
});



