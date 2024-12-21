let bagItemObj;

(() => {
  bagItemsObj();
  displayBagItems();
  //   console.log(bagItemObj);
})();

function bagItemsObj() {
  bagItemObj = bagItems.map((itemId) => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });

  // Use ForEach instead of foor loop (forEach does not return anything, it just modify)
  //   bagItemObj = bagItems.map((itemId) => {
  //     let obj = null;
  //     items.forEach((element) => {
  //       if (itemId == element.id) {
  //         obj = element;
  //       }
  //     });
  //     return obj;
  //   });
}

function displayBagItems() {
  let bagItemsContainer = document.querySelector(".bag-items-container");

  bagItemObj.forEach((item) => {
    bagItemsContainer.innerHTML += generateItem(item);
  });
}

function generateItem(items) {
  return `<div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${items.image}" />
            </div>
            <div class="item-right-part">
              <div class="company">${items.company}</div>
              <div class="item-name">
              ${items.tem_name}
              </div>
              <div class="price-container">
                <span class="current-price">Rs ${items.current_price}</span>
                <span class="original-price">Rs ${items.original_price}</span>
                <span class="discount-percentage">(${items.discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${items.return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${items.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart">X</div>
          </div>`;
}
