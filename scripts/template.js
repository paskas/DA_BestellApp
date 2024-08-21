function createCategoryHtml(category) {
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
            ${renderItemsOrders(category.items)}
        </div>
    </div>`;
}

function createItemHtml(item) {
    return `
        <div class="order_part">
            <div>
                <div>
                    <h2>${item.name}</h2>
                </div>
                <div><span>${item.info}</span></div>
                <div>
                    <h3>${item.price.toFixed(2)} €</h3>
                </div>
            </div>
            <div class="order_plus">
                <img src="assets/icons/icons8-plus-64.png" alt="Plus Icon">
            </div>
        </div>
    `;
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