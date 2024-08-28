let shoppingCart = {};


function init() {
    document.getElementById('deliver').classList.add('background_white');
    renderCategoriesOrders();
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
    }
}


/* check shopping cart */
function verificationShoppingCart(itemKey, item) {
    if (shoppingCart[itemKey]) {    // Check whether the item is already in the shopping cart
        shoppingCart[itemKey].quantity += 1;    // Increase quantity
        shoppingCart[itemKey].totalPrice += item.price;     // Increase total price
    } else {
        addFirstItemToShoppingCart(itemKey, item) // add item for the first time
    }
}


/* add item for the first time To Shopping Cart */
function addFirstItemToShoppingCart(itemKey, item) {
    document.getElementById('basketOrderInfo').classList.add('d-none');
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
        let basketItem = shoppingCart[itemKey];
        basketitem.innerHTML += createItemShoppingCartHtml(basketItem, itemKey); // Transferring itemKey
    }
}


/* increase order */
function increaseItem(itemKey) {
    shoppingCart[itemKey].quantity += 1;
    shoppingCart[itemKey].totalPrice += shoppingCart[itemKey].item.price;
    renderShoppingCart();
}


/* reduce order and check if empty */
function decreaseItem(itemKey) {
    if (shoppingCart[itemKey].quantity > 1) {
        shoppingCart[itemKey].quantity -= 1;
        shoppingCart[itemKey].totalPrice -= shoppingCart[itemKey].item.price;
    } else {
        delete shoppingCart[itemKey]; // Remove item from the shopping cart when the quantity reaches 1
    } if (Object.keys(shoppingCart).length === 0) { // check if shoppingCart is empty 
        document.getElementById('basketOrderInfo').classList.remove('d-none');
    }
    renderShoppingCart();
}



/* function addPriceShoppingCart(basketItem, itemKey) {
    document.getElementById('deliver').classList.add('background_white');
} */



