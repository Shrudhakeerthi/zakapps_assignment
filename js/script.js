
// PRODUCT GRID 


const productGrid = document.querySelector(".product-grid");
const productCards = Array.from(document.querySelectorAll(".product-card"));

const sortSelect = document.getElementById("sort");
const flavourFilters = document.querySelectorAll(".flavour-filter");
const ratingFilters = document.querySelectorAll(".rating-filter");

let activeCards = [...productCards];



// SORTING


if (sortSelect) {
  sortSelect.addEventListener("change", () => {

    let sorted = [...activeCards];

    if (sortSelect.value === "low-high") {
      sorted.sort((a, b) =>
        Number(a.dataset.price || 0) - Number(b.dataset.price || 0)
      );
    }

    else if (sortSelect.value === "high-low") {
      sorted.sort((a, b) =>
        Number(b.dataset.price || 0) - Number(a.dataset.price || 0)
      );
    }

    else if (sortSelect.value === "a-z") {
      sorted.sort((a, b) =>
        (a.dataset.name || "").localeCompare(b.dataset.name || "")
      );
    }

    render(sorted);
  });
}



// FILTERING


function filterProducts() {

  const selectedFlavours = Array.from(flavourFilters)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const selectedRatings = Array.from(ratingFilters)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  activeCards = productCards.filter(product => {

    const flavourMatch =
      selectedFlavours.length === 0 ||
      selectedFlavours.includes(product.dataset.flavour);

    const rating = Number(product.dataset.rating || 0);

    let ratingMatch = true;

    if (selectedRatings.length > 0) {

      ratingMatch = selectedRatings.some(value => {

        if (value === "4-above") {
          return rating >= 4;
        }

        if (value === "3-below") {
          return rating <= 3;
        }

        return false;
      });
    }

    return flavourMatch && ratingMatch;
  });

  render(activeCards);
}




// RENDER FUNCTION


function render(list) {
  if (!productGrid) return;

  productGrid.innerHTML = "";
  list.forEach(p => productGrid.appendChild(p));
}



// FILTER EVENTS


flavourFilters.forEach(f =>
  f.addEventListener("change", filterProducts)
);

ratingFilters.forEach(f =>
  f.addEventListener("change", filterProducts)
);



// CART SYSTEM (STORAGE)


let cartCount = Number(localStorage.getItem("cartCount")) || 0;

const cartElement = document.getElementById("cart-count");

if (cartElement) {
  cartElement.textContent = cartCount;
}

function addToCart() {
  cartCount++;
  localStorage.setItem("cartCount", cartCount);

  if (cartElement) {
    cartElement.textContent = cartCount;
  }

  alert("Product added to cart");
}



// BUY NOW BUTTON


function buyNow() {
  window.location.href = "order-success.html";
}



