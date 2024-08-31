
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
    let totalPrices = basketItem.totalPrice.toFixed(2);
    return `
    <div class="basket_info_area">
        <div class="info_name_price">
            <div class="info_name">
                <span>${item.name}</span>
            </div>
            <div class="info_price">
                <span>${totalPrices} €</span>
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


function createPriceShoppingCartHtml() {
    return `
    <div class="basket_price">
        <table>
            <tr>
                <td class="subtotal_table_left">Zwischensumme</td>
                <td id="subtotalPrice" class="price_table_right">${subtotalPrice.toFixed(2)} €</td>
            </tr>
            <tr>
                <td class="delivery-costs_table_left">Lieferkosten</td>
                <td id="deliveryCosts" class="price_table_right">${deliveryCosts.toFixed(2)} €</td>
            </tr>
            <tr>
                <td class="total-price_table_left">Gesamt</td>
                <td id="totalPrice" class="end-price_table_right">${totalPrice.toFixed(2)} €</td>
            </tr>
        </table>
    </div>
    <div class="basket_order_btn">
        <button onclick="sendOrder('basket')" type="button" aria-label="Bezahlen">
            <span>Bestellen</span>
        </button>
    </div>`;
}


function createDialogOrderHtml() {
    return `
    <div class="dialog_container ">
        <div class="dialog_title">
            <div class="dialog_title_container">
                <span><img src="assets/icons/icons8-thank-you-96.png" alt=""></span>
                <p>Deine Bestellung</p>
                <p>wurde abgeschickt</p>
                <span class="dialog_title_money">${totalPrice.toFixed(2)} €</span>
            </div>
        </div>
    </div>`
}


function createDialogBasketHtml() {
    return `
    <div class="dialog_basket">
        <div class="dialog_basket_title">
            <h2>Warenkorb</h2>
        </div>
        <div class="dialog_basket_deliver_pickUp_toggle_area">
            <div class="dialog_basket_deliver_pickUp">
                <div id="dialogDeliver" class="dialog_deliver background_white">
                    <input id="dialogOption_item_0" class="dialog_basket_toggle_input" type="radio" value="deliver">
                    <label onclick="toggleDeliverPickUpDialog('deliver')" class="dialog_basket_toggle_label"
                        for="option_item_0">
                        <span class="dialog_basket_display">
                            <div class="dialog_basket_display_img"><img src="assets/icons/icons8-bicycle-64.png" alt="">
                            </div>
                            <div>
                                <span>Lieferung</span>
                                <span>20-45 Min</span>
                            </div>
                        </span>
                    </label>
                </div>
                <div id="dialogPickup" class="dialog_pickup">
                    <input id="dialogOption_item_1" class="dialog_basket_toggle_input" type="radio" value="pickup">
                    <label onclick="toggleDeliverPickUpDialog('pickup')" class="dialog_basket_toggle_label"
                        for="option_item_1">
                        <span class="dialog_basket_display">
                            <div><img src="assets/icons/icons8-essen-abholen-64.png" alt=""></div>
                            <div>
                                <span>Abholung</span>
                                <span>15 Min</span>
                            </div>
                        </span>
                    </label>
                </div>
            </div>
        </div>
        <div id="dialogBasketItemPriceArea" class="dialog_basket_item_price_area d-none">
            <div id="dialogItemBasket" class="dialog_item_basket"></div>
        </div>
        <div id="dialogPriceBasket" class="dialog_price_basket d-none">
            <div class="basket_price">
                <table>
                    <tr>
                        <td class="subtotal_table_left">Zwischensumme</td>
                        <td id="dialogSubtotalPrice" class="price_table_right">${subtotalPrice.toFixed(2)} €</td>
                    </tr>
                    <tr>
                        <td class="delivery-costs_table_left">Lieferkosten</td>
                        <td id="dialogDeliveryCosts" class="price_table_right">${deliveryCosts.toFixed(2)} €</td>
                    </tr>
                    <tr>
                        <td class="total-price_table_left">Gesamt</td>
                        <td id="dialogTotalPrice" class="end-price_table_right">${totalPrice.toFixed(2)} €</td>
                    </tr>
                </table>
            </div>
            <div class="basket_order_btn">
                <button onclick="sendOrder('dialog')" type="button" aria-label="Bezahlen">
                    <span>Bestellen</span>
                </button>
            </div>
        </div>
        <div id="dialogBasketOrderInfo" class="dialog_basket_ordering_info">
            <div class="dialog_basket_info">
                <img src="assets/icons/icons8-shopping-basket-64.png" alt="">
                <h2>Fülle deinen Warenkorb</h2>
                <p>Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
            </div>
        </div>
    </div>
    `;
}




















