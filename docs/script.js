// --- Product Data (replace with API for production) ---
const PRODUCTS = [
  {
    id: 1,
    name: "Oversized Graphic Tee",
    price: 349,
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",
    desc: "Viral print, 100% cotton. #StreetStyle",
    tag: "New",
    category: "T-Shirts",
    rating: 4.5
  },
  {
    id: 2,
    name: "Denim Shacket",
    price: 999,
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    desc: "Unisex, Y2K vibes. Layer up!",
    tag: "Hot",
    category: "Jackets",
    rating: 4.2
  },
  {
    id: 3,
    name: "Chunky Sneakers",
    price: 1199,
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800&auto=format&fit=crop",
    desc: "All-day comfort, TikTok approved.",
    tag: "Trending",
    category: "Sneakers",
    rating: 4.7
  },
  {
    id: 4,
    name: "Retro Sunglasses",
    price: 299,
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800&auto=format&fit=crop",
    desc: "UV400, festival ready.",
    tag: "New",
    category: "Sunglasses",
    rating: 4.1
  },
  {
    id: 5,
    name: "Canvas Tote Bag",
    price: 249,
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    desc: "Eco, aesthetic, fits your iPad.",
    tag: "Eco",
    category: "Totes",
    rating: 4.0
  },
  {
    id: 6,
    name: "Tie-Dye Crop Top",
    price: 399,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    desc: "Gen-Z fav, pastel shades.",
    tag: "Trending",
    category: "T-Shirts",
    rating: 4.6
  },
  {
    id: 7,
    name: "Varsity Bomber",
    price: 1499,
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",
    desc: "College cool, limited drop.",
    tag: "Hot",
    category: "Jackets",
    rating: 4.8
  },
  {
    id: 8,
    name: "Platform Sneakers",
    price: 899,
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800&auto=format&fit=crop",
    desc: "Add height, add hype.",
    tag: "Trending",
    category: "Sneakers",
    rating: 4.3
  },
  {
    id: 9,
    name: "Oval Sunnies",
    price: 399,
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=800&auto=format&fit=crop",
    desc: "Retro, Y2K, Insta-ready.",
    tag: "New",
    category: "Sunglasses",
    rating: 4.4
  },
  {
    id: 10,
    name: "Minimalist Tote",
    price: 299,
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    desc: "Clean, fits all essentials.",
    tag: "Eco",
    category: "Totes",
    rating: 4.2
  },
  {
    id: 11,
    name: "Pastel Hoodie",
    price: 799,
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",
    desc: "Soft, cozy, IG aesthetic.",
    tag: "New",
    category: "T-Shirts",
    rating: 4.9
  },
  {
    id: 12,
    name: "Streetstyle Windbreaker",
    price: 1299,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    desc: "Waterproof, bold colors.",
    tag: "Hot",
    category: "Jackets",
    rating: 4.5
  },
  {
    id: 13,
    name: "Classic White Sneakers",
    price: 1099,
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=800&auto=format&fit=crop",
    desc: "Minimal, goes with everything.",
    tag: "Trending",
    category: "Sneakers",
    rating: 4.7
  },
  {
    id: 14,
    name: "Aviator Shades",
    price: 499,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    desc: "Timeless, unisex.",
    tag: "New",
    category: "Sunglasses",
    rating: 4.6
  },
  {
    id: 15,
    name: "Canvas Shopper",
    price: 349,
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=800&auto=format&fit=crop",
    desc: "Big, bold, sustainable.",
    tag: "Eco",
    category: "Totes",
    rating: 4.3
  }
];

// --- Cart State ---
let cart = [];
let wishlist = [];

// --- DOM Elements ---
const catalog = document.getElementById('catalog');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartSummary = document.getElementById('cartSummary');
const cartBadge = document.getElementById('cartBadge');
const closeCart = document.getElementById('closeCart');
const orderModal = document.getElementById('orderModal');
const orderDetails = document.getElementById('orderDetails');
const closeOrderModal = document.getElementById('closeOrderModal');

// --- Render Catalog with Filters ---
async function renderCatalog() {
  // Gather filter values
  const cat = document.getElementById('filterCategory')?.value || '';
  const priceMax = document.getElementById('filterPriceRange')?.value || 2000;
  const tag = document.getElementById('filterTag')?.value || '';
  const rating = document.getElementById('filterRating')?.value || '';
  const search = document.getElementById('filterSearch')?.value?.toLowerCase() || '';
  // Build query string
  const params = new URLSearchParams();
  if (cat) params.append('category', cat);
  if (priceMax) params.append('priceMax', priceMax);
  if (tag) params.append('tag', tag);
  if (rating) params.append('rating', rating);
  if (search) params.append('search', search);
  // Fetch filtered products from backend
  let products = [];
  try {
    const res = await fetch(`/api/products?${params.toString()}`);
    products = await res.json();
  } catch (e) {
    catalog.innerHTML = '<div style="color:#888;text-align:center;padding:40px 0;">Failed to load products.</div>';
    return;
  }
  if (!products.length) {
    catalog.innerHTML = '<div style="color:#888;text-align:center;padding:40px 0;">No products found for your filters.</div>';
    return;
  }
  catalog.innerHTML = products.map(prod => {
    const isWishlisted = wishlist.includes(prod.id);
    return `
    <div class="card" data-id="${prod.id}" style="border:2px solid #f3f4f6;transition:box-shadow .18s,transform .18s;box-shadow:0 2px 12px rgba(255,75,43,.04);position:relative;overflow:hidden;">
      <button class="wishlistBtn" data-id="${prod.id}" style="position:absolute;top:10px;left:10px;z-index:10;background:rgba(255,255,255,0.9);border:none;width:35px;height:35px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.1);transition:all 0.3s;">
        <span style="font-size:1.2rem;">${isWishlisted ? '❤️' : '🤍'}</span>
      </button>
      <img src="${prod.img}" alt="${prod.name}" style="border-radius:12px 12px 0 0;">
      <div style="padding:10px 0 0 0;">
        <h4 style="font-family:'Poppins',Inter,sans-serif;font-size:1.1rem;margin:0 0 2px 0;">${prod.name}</h4>
        <div style="color:var(--muted);font-size:.98rem;">₹${prod.price} <span style="color:#ff8a66;font-size:.95rem;">• 15m 🚀</span></div>
        <div style="margin:6px 0 8px;color:#888;font-size:.93rem;">${prod.desc}</div>
        <div style="display:flex;gap:8px;align-items:center;justify-content:center;margin-bottom:4px;">
          <button class="cta buyBtn">Buy Now</button>
          <button class="ghost addCartBtn">Add to Cart</button>
        </div>
        <div style="margin-top:2px;font-size:.85rem;color:var(--primary);font-weight:600;">${prod.tag ? prod.tag : ''}</div>
        <div style="margin-top:2px;font-size:.95rem;color:#fbbf24;display:flex;align-items:center;gap:2px;">
          ${renderStars(prod.rating)}
          <span style="color:#888;font-size:.92rem;margin-left:4px;">${prod.rating.toFixed(1)}</span>
        </div>
        <div style="position:absolute;top:0;right:0;background:linear-gradient(90deg,#ff4b2b,#ff8a66);color:#fff;font-size:.85rem;padding:4px 10px 4px 10px;border-radius:0 0 0 12px;letter-spacing:.5px;">${prod.category}</div>
      </div>
    </div>
  `}).join('');
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = '';
  for (let i = 0; i < full; i++) stars += '★';
  if (half) stars += '½';
  for (let i = full + half; i < 5; i++) stars += '☆';
  return stars;
}
// --- Category Click ---
document.querySelectorAll('.cat-card').forEach(card => {
  card.onclick = function() {
    document.getElementById('filterCategory').value = card.getAttribute('data-cat');
    renderCatalog();
  };
});

// --- Filter Change Events ---
['filterCategory','filterPriceRange','filterTag','filterRating','filterSearch'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.oninput = renderCatalog;
});


// --- Ensure DOM is loaded before attaching price slider events ---
document.addEventListener('DOMContentLoaded', function() {
  const priceRange = document.getElementById('filterPriceRange');
  const priceRangeValue = document.getElementById('priceRangeValue');
  if (priceRange && priceRangeValue) {
    const updatePriceValue = () => {
      priceRangeValue.textContent = `₹${priceRange.value}`;
    };
    priceRange.addEventListener('input', () => {
      updatePriceValue();
      renderCatalog();
    });
    // Set initial value
    updatePriceValue();
  }
});

// --- Cart Functions ---
function addToCart(id) {
  const prod = PRODUCTS.find(p => p.id == id);
  if (!prod) return;
  const idx = cart.findIndex(item => item.id == id);
  if (idx > -1) {
    cart[idx].qty += 1;
  } else {
    cart.push({ ...prod, qty: 1 });
  }
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id != id);
  updateCartUI();
}

function changeQty(id, delta) {
  const idx = cart.findIndex(item => item.id == id);
  if (idx > -1) {
    cart[idx].qty += delta;
    if (cart[idx].qty < 1) removeFromCart(id);
    else updateCartUI();
  }
}

function updateCartUI() {
  cartBadge.textContent = `Cart: ${cart.reduce((a, b) => a + b.qty, 0)}`;
  if (cart.length === 0) {
    cartItems.innerHTML = '<div style="color:#888;text-align:center">Your cart is empty.</div>';
    cartSummary.innerHTML = '';
    return;
  }
  cartItems.innerHTML = cart.map(item => `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
      <img src="${item.img}" style="width:54px;height:54px;border-radius:8px;object-fit:cover;">
      <div style="flex:1">
        <div style="font-weight:600">${item.name}</div>
        <div style="color:#888;font-size:.95rem">₹${item.price} x ${item.qty}</div>
      </div>
      <button onclick="changeQty(${item.id},-1)" style="background:#eee;border:0;width:28px;height:28px;border-radius:50%;font-size:1.1rem;cursor:pointer">-</button>
      <span style="min-width:22px;text-align:center">${item.qty}</span>
      <button onclick="changeQty(${item.id},1)" style="background:#eee;border:0;width:28px;height:28px;border-radius:50%;font-size:1.1rem;cursor:pointer">+</button>
      <button onclick="removeFromCart(${item.id})" style="background:transparent;border:0;color:#ff4b2b;font-size:1.2rem;margin-left:8px;cursor:pointer">&times;</button>
    </div>
  `).join('');
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartSummary.innerHTML = `
    <div style="display:flex;justify-content:space-between;font-weight:600;font-size:1.1rem;margin-bottom:10px">
      <span>Total</span><span>₹${total}</span>
    </div>
    <button class="cta" id="checkoutBtn" style="width:100%;margin-top:8px">Checkout</button>
  `;
  document.getElementById('checkoutBtn').onclick = placeOrderFromCart;
}

// --- Cart Modal ---
function showCart() {
  cartModal.style.display = 'block';
}
function hideCart() {
  cartModal.style.display = 'none';
}
closeCart.onclick = hideCart;
cartBadge.onclick = showCart;

// --- Order Modal ---
function showOrderModal(details) {
  orderDetails.innerHTML = details;
  orderModal.style.display = 'flex';
}
function hideOrderModal() {
  orderModal.style.display = 'none';
}
closeOrderModal.onclick = hideOrderModal;

// --- Place Order (from Cart) ---
function placeOrderFromCart() {
  if (cart.length === 0) return;
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  showOrderModal(`Thank you for shopping!<br>Your order of <b>${cart.length}</b> item(s) (₹${total}) will be delivered in <b>15 minutes</b>.`);
  cart = [];
  updateCartUI();
  hideCart();
}

// --- Wishlist Functions ---
function toggleWishlist(productId) {
  const id = parseInt(productId);
  const index = wishlist.indexOf(id);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast('Removed from wishlist ❤️');
  } else {
    wishlist.push(id);
    showToast('Added to wishlist ❤️');
  }
  // Save to localStorage
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  // Re-render catalog to update wishlist hearts
  renderCatalog();
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(90deg, #ff4b2b, #ff8a66);
    color: white;
    padding: 12px 24px;
    border-radius: 50px;
    font-weight: 600;
    z-index: 10000;
    animation: slideUp 0.3s ease-out;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

// Load wishlist from localStorage
if (localStorage.getItem('wishlist')) {
  wishlist = JSON.parse(localStorage.getItem('wishlist'));
}

// --- Catalog Event Delegation ---
catalog.addEventListener('click', function(e) {
  // Handle wishlist button
  if (e.target.closest('.wishlistBtn')) {
    const btn = e.target.closest('.wishlistBtn');
    const id = btn.getAttribute('data-id');
    toggleWishlist(id);
    return;
  }
  
  const card = e.target.closest('.card');
  if (!card) return;
  const id = card.getAttribute('data-id');
  if (e.target.classList.contains('addCartBtn')) {
    addToCart(id);
  } else if (e.target.classList.contains('buyBtn')) {
    addToCart(id);
    showCart();
  }
});

// --- Global Cart Badge Click ---
cartBadge.style.cursor = 'pointer';

// --- Initial Render ---
renderCatalog();
updateCartUI();

// --- Close modals on outside click ---
window.onclick = function(e) {
  if (e.target === cartModal) hideCart();
  if (e.target === orderModal) hideOrderModal();
};

// --- Keyboard ESC to close modals ---
window.onkeydown = function(e) {
  if (e.key === 'Escape') {
    hideCart();
    hideOrderModal();
  }
};
 