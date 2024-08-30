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


/* switch delivery pickup basket */
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


/* switch delivery pickup Dialog basket */
function toggleDeliverPickUpDialog(selection) {
    setTimeout(() => {
        if (selection === 'deliver') {
            deliveryCosts = 5;
            document.getElementById('dialogDeliver').classList.add('background_white');
            document.getElementById('dialogPickup').classList.remove('background_white');
        } else if (selection === 'pickup') {
            deliveryCosts = 0;
            document.getElementById('dialogPickup').classList.add('background_white');
            document.getElementById('dialogDeliver').classList.remove('background_white');
        }
        shoppingCartPricesDialog();
    }, 100)
}


/* updatet price basket */
function shoppingCartPrices() {
    let subtotal = calculateSubtotal();
    let totalPrice = subtotal + deliveryCosts;
    let deliveryCostsElement = document.getElementById('deliveryCosts');
    let subtotalPriceElement = document.getElementById('subtotalPrice');
    let totalPriceElement = document.getElementById('totalPrice');
    if (deliveryCostsElement && subtotalPriceElement && totalPriceElement) {
        deliveryCostsElement.innerText = `${deliveryCosts.toFixed(2)} €`;
        subtotalPriceElement.innerText = `${subtotal.toFixed(2)} €`;
        totalPriceElement.innerText = `${totalPrice.toFixed(2)} €`;
    }
}


/* updatet Dialog price basket */
function shoppingCartPricesDialog() {
    let subtotal = calculateSubtotal();
    let totalPriceDialog = subtotal + deliveryCosts;
    let dialogDeliveryCostsElement = document.getElementById('dialogDeliveryCosts');
    let dialogSubtotalPriceElement = document.getElementById('dialogSubtotalPrice');
    let dialogTotalPriceElement = document.getElementById('dialogTotalPrice');
    if (dialogDeliveryCostsElement) {
        dialogDeliveryCostsElement.innerText = `${deliveryCosts.toFixed(2)} €`;
    }
    if (dialogSubtotalPriceElement) {
        dialogSubtotalPriceElement.innerText = `${subtotal.toFixed(2)} €`;
    }
    if (dialogTotalPriceElement) {
        dialogTotalPriceElement.innerText = `${totalPriceDialog.toFixed(2)} €`;
    }
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

function clearDialogShoppingCart() {
    resetDialog();
    clearAndUpdateDialogShoppingCart();
}


/* clear dialog shopping cart new render*/
function resetDialog() {
    let dialogBasketOrderInfo = document.getElementById('dialogBasketOrderInfo');
    let dialogPriceBasket = document.getElementById('dialogPriceBasket');
    let dialogBasketItemPriceArea = document.getElementById('dialogBasketItemPriceArea');
    let basketDialogItem = document.getElementById('dialogItemBasket');
    if (dialogBasketOrderInfo) {
        dialogBasketOrderInfo.classList.remove('d-none');
    } if (dialogPriceBasket) {
        dialogPriceBasket.classList.add('d-none');
    } if (dialogBasketItemPriceArea) {
        dialogBasketItemPriceArea.classList.add('d-none');
    } if (basketDialogItem) {
        basketDialogItem.innerHTML = '';
    }
}


function clearAndUpdateDialogShoppingCart() {
    shoppingCart = {};
    renderDialogShoppingCart();
    shoppingCartPricesDialog();
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





