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

function createItemHtml(item, categoryIndex, dishesIndex) {
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
            <img onclick="addItemToBasket(${categoryIndex},${dishesIndex})" src="assets/icons/icons8-plus-64.png" alt="Plus Icon">
        </div>
    </div>`;
}

function createItemBasketHtml(item, number) {
    return `
    <div class="basket_info_area">
        <div class="info_name_price">
            <div class="info_name">
                <span>${item.name}</span>
            </div>
            <div class="info_price">
                <span>${item.price.toFixed(2)} €</span>
            </div>
        </div>
        <div class="info_remark_how-many">
            <div class="info_remark">
                <p>Anmerkung hinzufügen</p>
            </div>
            <div class="info_toggle_how-many">
                <span onclick="" class="info_toggle_plus_minus">
                    <img src="assets/icons/icons8-minus-64.png" alt="">
                </span>
                <div class="info_howmany">
                    <span>${number}</span>
                </div>
                <span onclick="" class="info_toggle_plus_minus">
                    <img src="assets/icons/icons8-plus-64.png" alt="">
                </span>
            </div>
        </div>
    </div>
    <div class="dividing_line"></div>`;
}

function createPriceBasketHtml() {
    return `
    <div class="basket_price">
        <table>
            <tr>
                <td class="subtotal_table_left">Zwischensumme</td>
                <td class="price_table_right">24,70 €</td>
            </tr>
            <tr>
                <td class="delivery-costs_table_left">Lieferkosten</td>
                <td id="deliveryCosts" class="price_table_right">24,70 €</td>
            </tr>
            <tr>
                <td class="total-price_table_left">Gesamt</td>
                <td class="end-price_table_right">24,70 €</td>
            </tr>
        </table>
    </div>
    <div class="basket_order_btn">
        <button type="button" aria-label="Bezahlen">
            <span>Bestellen</span>
        </button>
    </div>`;
}





















// function createdOrderHtml(category) {
//     let orderHtml = `
//     <div class="category_order">
//         <figure>
//             <img src="${category.image}" alt="${category.category}">
//         </figure>
//         <div>
//             <h2>${category.category}</h2>
//         </div>
//         <div>
//             <p>${category.info}</p>
//         </div>
//     </div>
//     `;
//     category.items.forEach(item => {
//         orderHtml += `
//     <div class="order_part">
//         <div>
//             <div>
//                 <h2>${item.name}</h2>
//             </div>
//             <div><span>${item.info}</span></div>
//             <div>
//                 <h3>${item.price.toFixed(2)} €</h3>
//             </div>
//         </div>
//         <div class="order_plus">
//             <img src="assets/icons/icons8-plus-64.png" alt="Plus Icon">
//         </div>
//     </div>
//     `;
//     });
//     return orderHtml;
// }