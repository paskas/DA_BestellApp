function init() {
    document.getElementById('deliver').classList.add('background_white');
    renderCategoriesOrders();
}


function renderCategoriesOrders() {
    let titleOrders = document.getElementById('dishesOrders');
    titleOrders.innerHTML = '';
    let categories = Object.values(orderDishes);
    for (let i = 0; i < categories.length; i++) {
        let category = categories[i];
        titleOrders.innerHTML += createCategoryHtml(category, i);
    }
}


function renderItemsOrders(items, categoryIndex) {
    let ordersHtml = '';
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        ordersHtml += createItemHtml(item, categoryIndex, i);
    }
    return ordersHtml;
}


function goToCategory(category) {
    const element = document.getElementById(`category-${category}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


function toggleDeliverPickUp(selection) {
    document.getElementById('deliver').classList.remove('background_white');
    document.getElementById('pickup').classList.remove('background_white');
    if (selection === 'deliver') {
        document.getElementById('deliver').classList.add('background_white');
    } else if (selection === 'pickup') {
        document.getElementById('pickup').classList.add('background_white');
    }
}


function addItemToBasket(categoryIndex, dishesIndex) {
    let categoryKeys = Object.keys(orderDishes); 
    let categoryKey = categoryKeys[categoryIndex];
    let category = orderDishes[categoryKey];
    if (category && category.items && category.items[dishesIndex]) {
        let item = category.items[dishesIndex];
        document.getElementById('basketOrderInfo').classList.add('d-none');
        let basketitem = document.getElementById('itemBasket');
        basketitem.innerHTML += createItemBasketHtml(item);
    } else {
        console.error("Fehler beim Hinzufügen des Artikels: Kategorie oder Artikel nicht gefunden.");
    }
}






