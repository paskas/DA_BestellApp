let shoppingCart = {};
let deliveryCosts = 5;
let subtotalPrice = 0;
let totalPrice = 0;


/* navigate to the categories */
function goToCategory(category) {
    const element = document.getElementById(`category-${category}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


/* Switch delivery pickup */
function toggleDeliverPickUp(selection) {
    setTimeout(() => {
        if (selection === 'deliver') {
            deliveryCosts = 5;
            document.getElementById('deliver').classList.add('background_white');
            document.getElementById('pickup').classList.remove('background_white');
        } else if (selection === 'pickup') {
            deliveryCosts = 0;
            document.getElementById('pickup').classList.add('background_white');
            document.getElementById('deliver').classList.remove('background_white');
        }
        shoppingCartPrices()
    }, 100)
}


/* updatet price basket */
function shoppingCartPrices() {
    subtotal = calculateSubtotal();
    totalPrice = subtotal + deliveryCosts;
    document.getElementById('deliveryCosts').innerText = `${deliveryCosts.toFixed(2)} €`;
    document.getElementById('subtotalPrice').innerText = `${subtotal.toFixed(2)} €`;
    document.getElementById('totalPrice').innerText = `${totalPrice.toFixed(2)} €`;
}


/* calculate subtotal price basket */
function calculateSubtotal() {
    let subtotal = 0;
    for (let itemKey in shoppingCart) {
        subtotal += shoppingCart[itemKey].totalPrice;
    }
    return subtotal;
}


/* clear shopping cart new render*/
function clearShoppingCart() {
    document.getElementById('priceBasket').classList.add('d-none');
    document.getElementById('basketOrderInfo').classList.remove('d-none');
    shoppingCart = {};
    renderShoppingCart();
    shoppingCartPrices();
}


/* close click event dialog order */
function closeSendDialog() {
    const dialog = document.getElementById('sendOrderDialog');
    dialog.addEventListener('click', function (event) {
        if (event.target === dialog) {
            dialog.classList.add('d-none');
        }
    });
}
