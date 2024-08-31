function init() {
    document.getElementById('sendOrderDialog').classList.add('d-none');
    document.getElementById('deliver').classList.add('background_white');
    document.getElementById('priceBasket').classList.add('d-none');
    renderCategoriesOrders();
    loadFromLocalStorage();
    document.getElementById('priceBasket').innerHTML = createPriceShoppingCartHtml();
    shoppingCartPrices();
}


/* categories Render orders */
function renderCategoriesOrders() {
    let titleOrders = document.getElementById('dishesOrders');
    titleOrders.innerHTML = '';
    let categories = Object.values(orderDishes);
    for (let i = 0; i < categories.length; i++) {
        let category = categories[i];
        titleOrders.innerHTML += createCategoryHtml(category, i);
    }
}


/* items Render orders */
function renderItemsOrders(items, categoryIndex) {
    let ordersHtml = '';
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        ordersHtml += createItemHtml(item, categoryIndex, i);
    }
    return ordersHtml;
}


/* add item to shopping cart */
function addItemToShoppingCart(categoryIndex, dishesIndex) {
    let categoryKeys = Object.keys(orderDishes);
    let categoryKey = categoryKeys[categoryIndex];
    let category = orderDishes[categoryKey];
    if (category && category.items && category.items[dishesIndex]) {
        let item = category.items[dishesIndex];
        let itemKey = `${categoryIndex}-${dishesIndex}`;    // Unique key for each item in the shopping cart
        verificationShoppingCart(itemKey, item)
        renderShoppingCart();     // Update shopping cart
        if (isDialogOpen()) {   // Check if the dialog open
            renderDialogShoppingCart(); // Update dialog shopping cart
        }
    }
    saveToLocalStorage();
}


/* check shopping cart and increase */
function verificationShoppingCart(itemKey, item) {
    if (shoppingCart[itemKey]) {    // Check whether the item is already in the shopping cart
        shoppingCart[itemKey].quantity += 1;    // Increase quantity
        shoppingCart[itemKey].totalPrice += item.price;     // Increase total price
    } else {
        addFirstItemToShoppingCart(itemKey, item)   // add item for the first time
    }
    shoppingCartPrices();
    saveToLocalStorage();
}


/* add item for the first time To Shopping Cart */
function addFirstItemToShoppingCart(itemKey, item) {
    document.getElementById('basketOrderInfo').classList.add('d-none');
    document.getElementById('priceBasket').classList.remove('d-none');
    shoppingCart[itemKey] = {
        item: item,
        quantity: 1,
        totalPrice: item.price
    };
    return shoppingCart[itemKey];
}


/* items Render orders shopping cart */
function renderShoppingCart() {
    let basketitem = document.getElementById('itemBasket');
    basketitem.innerHTML = '';
    for (let itemKey in shoppingCart) {
        document.getElementById('basketItemPriceArea').classList.remove('d-none');
        let basketItem = shoppingCart[itemKey];
        basketitem.innerHTML += createItemShoppingCartHtml(basketItem, itemKey);    // Transferring itemKey
    }
    shoppingCartPrices();
}


/* items Render orders Dialog shopping cart */
function renderDialogShoppingCart() {
    let basketDialogItem = document.getElementById('dialogItemBasket');
    if (basketDialogItem) {
        basketDialogItem.innerHTML = '';
        for (let itemKey in shoppingCart) {
            document.getElementById('dialogBasketOrderInfo').classList.add('d-none');
            document.getElementById('dialogPriceBasket').classList.remove('d-none');
            document.getElementById('dialogBasketItemPriceArea').classList.remove('d-none');
            let basketItem = shoppingCart[itemKey];
            basketDialogItem.innerHTML += createItemShoppingCartHtml(basketItem, itemKey);
        }
        shoppingCartPricesDialog();
    }
}


/* increase order */
function increaseItem(itemKey) {
    shoppingCart[itemKey].quantity += 1;
    shoppingCart[itemKey].totalPrice += shoppingCart[itemKey].item.price;
    renderShoppingCart();
    if (isDialogOpen()) {
        renderDialogShoppingCart();
    }
    saveToLocalStorage();
}


/* reduce order and check if empty */
function decreaseItem(itemKey) {
    if (shoppingCart[itemKey].quantity > 1) {
        shoppingCart[itemKey].quantity -= 1;
        shoppingCart[itemKey].totalPrice -= shoppingCart[itemKey].item.price;
    } else {
        delete shoppingCart[itemKey];   // Remove item from the shopping cart when the quantity reaches 1
    }
    if (Object.keys(shoppingCart).length === 0) {   // check if shoppingCart is empty 
        document.getElementById('basketOrderInfo').classList.remove('d-none');
        document.getElementById('priceBasket').classList.add('d-none');
    }
    renderShoppingCart();
    if (isDialogOpen()) {
        renderDialogShoppingCart();
    }
    saveToLocalStorage();
}


/* open Dialog shopping cart */
function openFullscreenBasket() {
    let footer = document.getElementById('footer');
    let basketDialog = document.getElementById('dialogBasket');
    if (basketDialog && footer) {
        basketDialog.classList.toggle('d-none');
        footer.classList.toggle('d-none');
        if (!basketDialog.classList.contains('d-none')) {
            basketDialog.innerHTML = createDialogBasketHtml();
            renderDialogShoppingCart();
            shoppingCartPricesDialog();
        }
    }
}


/* send order button */
function sendOrder() {
    document.getElementById('sendOrderDialog').classList.remove('d-none');
    let sentDialog = document.getElementById('sendOrderDialog');
    sentDialog.innerHTML = createDialogOrderHtml();
    clearShoppingCart();
    clearDialogShoppingCart();
    closeSendDialog();
    saveToLocalStorage()
}


/* save / load local storage */
function saveToLocalStorage() {
    localStorage.setItem(`shoppingCart`, JSON.stringify(shoppingCart));
}


function loadFromLocalStorage() {
    let savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
        shoppingCart = JSON.parse(savedCart);
        if (Object.keys(shoppingCart).length > 0) {
            document.getElementById('priceBasket').classList.remove('d-none');
            document.getElementById('basketOrderInfo').classList.add('d-none');
        }
        renderShoppingCart();
        shoppingCartPrices();
    }
}



