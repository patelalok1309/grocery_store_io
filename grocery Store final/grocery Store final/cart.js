function addToCart(item) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Check if item is already in cart
  const cartItem = cartItems.find(cartItem => cartItem.id === item.id);
  if (cartItem) {
    // Increment quantity of existing item
    cartItem.quantity++;
  } else {
    // Add new item to cart
    item.quantity = 1;
    cartItems.push(item);
  }

  // Save cart items to local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

const addToCartButtons = document.querySelectorAll('.card button');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert("Item added successfully");
    const card = button.parentNode;
    const id = card.dataset.id;
    const name = card.dataset.name;
    const price = parseFloat(card.dataset.price);
    const image = card.dataset.image;

    const item = { id, name, price, image };
    addToCart(item);
  });
});
