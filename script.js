let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    totalPrice += price;
    
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-list");
    const totalElement = document.getElementById("total");

    // Clear existing cart items
    cartList.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.product} - $${item.price}`;
        cartList.appendChild(li);
    });

    totalElement.textContent = totalPrice;
}
