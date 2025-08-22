const products = [
  { id: 1, name: "Laptop", price: 999.99, image: "https://via.placeholder.com/200x150?text=Laptop" },
  { id: 2, name: "Phone", price: 499.99, image: "https://via.placeholder.com/200x150?text=Phone" },
  { id: 3, name: "Headphones", price: 199.99, image: "https://via.placeholder.com/200x150?text=Headphones" },
];

const cart = [];

function displayProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;

  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.innerText = total.toFixed(2);
}

// Initialize
displayProducts();
