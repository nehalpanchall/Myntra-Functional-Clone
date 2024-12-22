let bagItemObj;

(() => {
  bagItemsObj();
  displayBagItems();
  displayBagSummary();
  //   console.log(bagItemObj);
})();

function bagItemsObj() {
  bagItemObj = bagItem.map((itemId) => {
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

  let innerHTML = "";
  bagItemObj.forEach((item) => {
    innerHTML += generateItem(item);
  });
  bagItemsContainer.innerHTML = innerHTML;
}

function removeBagItem(id) {
  bagItem = bagItem.filter((val) => val != id);

  localStorage.setItem("bagItems", JSON.stringify(bagItem));

  bagItemsObj();
  displayBagItems();
  displayBagCount();
  displayBagSummary();
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

            <div onClick="removeBagItem(${items.id})" class="remove-from-cart">X</div>
          </div>`;
}

function displayBagSummary() {
  let bagSummaryElement = document.querySelector(".bag-summary");

  console.log(bagItemObj);

  let totalMRP = 0;
  let totalDiscount = 0;
  const CONVENIENCE_FEES = 99;

  bagItemObj.forEach((element) => {
    totalMRP += element.original_price;
    totalDiscount += element.original_price - element.current_price;
  });

  let totalAmount = totalMRP - totalDiscount + CONVENIENCE_FEES;

  let innerHTML = "";

  innerHTML += `<div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${bagItemObj.length} Items)</div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">₹ ${totalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount"
                >-₹ ${totalDiscount}</span
              >
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">₹ ${CONVENIENCE_FEES}</span>
            </div>
            <hr />
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">₹ ${totalAmount}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`;

  bagSummaryElement.innerHTML = innerHTML;
}
