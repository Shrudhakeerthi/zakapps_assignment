// =========================
// PRODUCT DATA
// =========================

const products = {
  1: { name: "VANILLA", price: 100, oldPrice: 150, reviews: "32 Reviews", image: "images/Screenshot 2026-05-13 182208.png", description: "Premium vanilla flavour." },
  2: { name: "CHOCOLATE", price: 145, oldPrice: 180, reviews: "24 Reviews", image: "images/Screenshot 2026-05-13 182145.png", description: "Smooth chocolate flavour." },
  3: { name: "BLACK CURRENT", price: 190, oldPrice: 210, reviews: "18 Reviews", image: "images/image.png", description: "Fruity black current flavour." },
  4: { name: "STRAWBERRY", price: 130, oldPrice: 156, reviews: "29 Reviews", image: "images/Screenshot 2026-05-13 203015.png", description: "Sweet strawberry flavour." },
  5: { name: "VANILLA DELUXE", price: 230, oldPrice: 270, reviews: "40 Reviews", image: "images/Screenshot 2026-05-13 182208.png", description: "Rich vanilla deluxe." },
  6: { name: "DARK CHOCOLATE", price: 215, oldPrice: 234, reviews: "20 Reviews", image: "images/Screenshot 2026-05-13 182145.png", description: "Dark chocolate flavour." },
  7: { name: "BLACK CURRENT PREMIUM", price: 256, oldPrice: 300, reviews: "20 Reviews", image: "images/image.png", description: "Premium black current." },
  8: { name: "STRAWBERRY PREMIUM", price: 340, oldPrice: 389, reviews: "20 Reviews", image: "images/Screenshot 2026-05-13 203015.png", description: "Premium strawberry." }
};

// =========================
// LOAD PRODUCT
// =========================

function formatINR(v) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR"
  }).format(v);
}

const id = new URLSearchParams(window.location.search).get("id");
const product = products[id];

if (product) {
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").textContent = formatINR(product.price);
  document.getElementById("old-price").textContent = formatINR(product.oldPrice);
  document.getElementById("review-count").textContent = product.reviews;
  document.getElementById("main-image").src = product.image;
  document.querySelector(".product-description").textContent = product.description;
}

// =========================
// QUANTITY
// =========================

let quantity = 1;

function updateQty() {
  document.getElementById("quantity").textContent = quantity;
}

function increaseQty() {
  quantity++;
  updateQty();
}

function decreaseQty() {
  if (quantity > 1) {
    quantity--;
    updateQty();
  }
}

updateQty();

// =========================
// CART 
// =========================

// read cart
function getCart() {
  return Number(localStorage.getItem("cartCount")) || 0;
}

// save cart
function setCart(value) {
  localStorage.setItem("cartCount", value);
  updateCartUI();
}

// update UI
function updateCartUI() {
  const el = document.getElementById("cart-count");
  if (el) el.textContent = getCart();
}

updateCartUI();

// ADD TO CART
function addToCart() {
  setCart(getCart() + quantity);
  alert(quantity + " item(s) added to cart");
}

// BUY NOW 
function buyNow() {
  localStorage.removeItem("cartCount");
  setCart(0);
  window.location.href = "order-success.html";
}