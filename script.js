function init() {
    renderCategoriesOrders();
}

function renderCategoriesOrders() {
    let titleOrders = document.getElementById('dishesOrders');
    titleOrders.innerHTML = '';
    let categories = Object.values(orderDishes);
    for (let i = 0; i < categories.length; i++) {
        let category = categories[i];
        titleOrders.innerHTML += createCategoryHtml(category);
    }
}

function renderItemsOrders(items) {
    let ordersHtml = '';
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        ordersHtml += createItemHtml(item);
    }
    return ordersHtml;
}

function goToCategory(category) {
    const element = document.getElementById(`category-${category}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
