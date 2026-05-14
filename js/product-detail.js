const products = {
  1: {
    name: "VANILLA",
    price: 100,
    oldPrice: 150,
    reviews: "32 Reviews",
    image: "images/Screenshot 2026-05-13 182208.png",
    description:
      "Premium vanilla flavour made with rich organic ingredients. Perfect for desserts and beverages."
  },

  2: {
    name: "CHOCOLATE",
    price: 145,
    oldPrice: 180,
    reviews: "24 Reviews",
    image: "images/Screenshot 2026-05-13 182145.png",
    description:
      "Smooth chocolate flavour crafted for cakes, milkshakes and sweet recipes."
  },

  3: {
    name: "BLACK CURRENT",
    price: 190,
    oldPrice: 210,
    reviews: "18 Reviews",
    image: "images/image.png",
    description:
      "Fresh black current flavour with fruity taste and premium quality ingredients."
  },

  4: {
    name: "STRAWBERRY",
    price: 130,
    oldPrice: 156,
    reviews: "29 Reviews",
    image: "images/Screenshot 2026-05-13 203015.png",
    description:
      "Sweet strawberry flavour perfect for desserts, ice creams and drinks."
  },

  5: {
    name: "VANILLA DELUXE",
    price: 230,
    oldPrice: 270,
    reviews: "40 Reviews",
    image: "images/Screenshot 2026-05-13 182208.png",
    description:
      "Rich deluxe vanilla flavour with smooth texture and natural aroma."
  },

  6: {
    name: "DARK CHOCOLATE",
    price: 215,
    oldPrice: 234,
    reviews: "20 Reviews",
    image: "images/Screenshot 2026-05-13 182145.png",
    description:
      "Dark chocolate flavour with intense cocoa taste and premium ingredients."
  },

  7: {
    name: "BLACK CURRENT PREMIUM",
    price: 256,
    oldPrice: 300,
    reviews: "20 Reviews",
    image: "images/image.png",
    description:
      "Premium black current flavour with refreshing fruity sweetness."
  },

  8: {
    name: "STRAWBERRY PREMIUM",
    price: 340,
    oldPrice: 389,
    reviews: "20 Reviews",
    image: "images/Screenshot 2026-05-13 203015.png",
    description:
      "Premium strawberry flavour with rich creamy texture and fresh taste."
  }
};

// FORMAT CURRENCY (INR)
function formatINR(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR"
  }).format(value);
}

// GET PRODUCT ID
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const product = products[id];

// LOAD PRODUCT
if (product) {
  document.getElementById("product-name").textContent = product.name;

  document.getElementById("product-price").textContent =
    formatINR(product.price);

  document.getElementById("old-price").textContent =
    formatINR(product.oldPrice);

  document.getElementById("review-count").textContent =
    product.reviews;

  document.getElementById("main-image").src = product.image;

  document.querySelector(".product-description").textContent =
    product.description;
}

// CART COUNT
let cartCount = Number(localStorage.getItem("cartCount")) || 0;

const cartElement = document.getElementById("cart-count");

if (cartElement) {
  cartElement.textContent = cartCount;
}

// QUANTITY SYSTEM
let quantity = 1;

function updateQty() {
  const qtyEl = document.getElementById("quantity");
  if (qtyEl) qtyEl.textContent = quantity;
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

// ADD TO CART
function addToCart() {
  cartCount = Number(cartCount) + quantity;
  localStorage.setItem("cartCount", cartCount);

  if (cartElement) {
    cartElement.textContent = cartCount;
  }

  alert(quantity + " item(s) added to cart");
}

// BUY NOW
function buyNow() {
  window.location.href = "order-success.html";
}