 const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        const cartItemsContainer = document.getElementById('cart-items');

        function renderCart() {
            cartItemsContainer.innerHTML = '';

            cartItems.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');

                const image = document.createElement('img');
                image.src = item.image;
                image.alt = item.name;
                card.appendChild(image);

                const name = document.createElement('h3');
                name.textContent = item.name;
                card.appendChild(name);

                const price = document.createElement('p');
                price.setAttribute('id', 'pric');
                price.textContent = '₹' + item.price.toFixed(2);
                card.appendChild(price);

                const quantity = document.createElement('p');
                quantity.setAttribute('id', 'quant');
                quantity.textContent = 'Quantity: ' + item.quantity;
                card.appendChild(quantity);

                const removeButton = document.createElement('button');
                removeButton.classList.add('bt');
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', () => {
                    const index = cartItems.indexOf(item);
                    if (index > -1) {
                        cartItems.splice(index, 1);
                        localStorage.setItem('cartItems', JSON.stringify(cartItems));
                        renderCart();
                    }
                });
                card.appendChild(removeButton);

                cartItemsContainer.appendChild(card);
            });
            const cartTotal = document.getElementById('cart-total');
            const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
            cartTotal.textContent = 'Payable Amount : ₹' + total.toFixed(2);
        }

        renderCart();



        // For Payment Pop-up
        var paymentModal = document.getElementById("payment-modal");
        var Submit = document.getElementById("Submit")
        var paymentBtn = document.getElementById("payment-btn");
        var closeBtn = document.getElementsByClassName("close")[0];

        paymentBtn.onclick = function () {
            paymentModal.style.display = "block";
        }
        Submit.onclick = function () {
            alert("Successfully")
        }
        closeBtn.onclick = function () {
            paymentModal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == paymentModal) {
                paymentModal.style.display = "none";
            }
        }
        // For Clear Cart After Submit On payment
        const paymentButton = document.getElementById('Submit');

        paymentButton.addEventListener('click', () => {
            // delete the localStorage item that stores the cart data
            // localStorage.removeItem('cartData');
            localStorage.clear();

            // clear the cart on the website by removing all the items from the cart element
            const cartElement = document.getElementById('cart-items');
            cartElement.innerHTML = '';
        });
