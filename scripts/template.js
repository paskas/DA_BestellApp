function createCategoryHtml(category, categoryIndex) {
    return `
    <div id="category-${category.category}" class="category_order">
        <div class="category_container">
            <figure class="category_image">
                <img src="${category.image}" alt="${category.category}">
            </figure>
            <div class="category_title">
                <h2>${category.category}</h2>
            </div>
            <div class="category_text">
                <p>${category.info}</p>
            </div>
        </div>
        <div class="items_container">
            ${renderItemsOrders(category.items, categoryIndex)}
        </div>
    </div>`;
}


function createItemHtml(item, categoryIndex, itemsDishesIndex) {
    return `
    <div class="order_part">
        <div class="order_info">
            <div>
                <h2>${item.name}</h2>
            </div>
            <div><span>${item.info}</span></div>
            <div>
                <h3>${item.price.toFixed(2)} €</h3>
            </div>
        </div>
        <div class="order_plus">
            <img onclick="addItemToShoppingCart(${categoryIndex},${itemsDishesIndex})" src="assets/icons/icons8-plus-64.png" alt="Plus Icon">
        </div>
    </div>`;
}


function createItemShoppingCartHtml(basketItem, itemKey) {
    let item = basketItem.item;
    let quantity = basketItem.quantity;
    let totalPrice = basketItem.totalPrice.toFixed(2);
    return `
    <div class="basket_info_area">
        <div class="info_name_price">
            <div class="info_name">
                <span>${item.name}</span>
            </div>
            <div class="info_price">
                <span>${totalPrice} €</span>
            </div>
        </div>
        <div class="info_remark_how-many">
            <div class="info_remark">
                <p>Anmerkung hinzufügen</p>
            </div>
            <div class="info_toggle_how-many">
                <span class="info_toggle_plus_minus">
                    <img src="assets/icons/icons8-minus-64.png" alt="" onclick="decreaseItem('${itemKey}')">
                </span>
                <div class="info_howmany">
                    <span>${quantity}</span>
                </div>
                <span class="info_toggle_plus_minus">
                    <img src="assets/icons/icons8-plus-64.png" alt="" onclick="increaseItem('${itemKey}')">
                </span>
            </div>
        </div>
    </div>
    <div class="dividing_line"></div>`;
}


function createPriceShoppingCartHtml(basketItem, itemKey) {
    let item = basketItem.item;
    let quantity = basketItem.quantity;
    let totalPrice = basketItem.totalPrice.toFixed(2);
    return `
    <div class="basket_price">
        <table>
            <tr>
                <td class="subtotal_table_left">Zwischensumme</td>
                <td class="price_table_right">${subtotal} €</td>
            </tr>
            <tr>
                <td class="delivery-costs_table_left">Lieferkosten</td>
                <td id="deliveryCosts" class="price_table_right">${deliveryCosts} €</td>
            </tr>
            <tr>
                <td class="total-price_table_left">Gesamt</td>
                <td class="end-price_table_right">${totalPrice} €</td>
            </tr>
        </table>
    </div>
    <div class="basket_order_btn">
        <button type="button" aria-label="Bezahlen">
            <span>Bestellen</span>
        </button>
    </div>`;
}


function renderAlertMessage() {
    return `
    <div id="alertMessageDialog" class="alert_container">
        <div class="alert_content_container">
            <p>Fehlende Daten !</p>
            <button onclick="confirmAlert(true)">OK</button>
        </div>
    </div>`
}


















