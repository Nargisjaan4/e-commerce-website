// app.js

// Simulating a simple cart system with localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productId) {
  const productElement = document.getElementById(productId);
  const productName = productElement.querySelector('h2').textContent;
  const productPrice = productElement.querySelector('p').textContent;

  const product = {
    name: productName,
    price: productPrice,
  };

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${productName} has been added to your cart!`);
}
