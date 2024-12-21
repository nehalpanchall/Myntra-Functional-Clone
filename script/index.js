let bagItems;

// on display load
(() => {
  let bagItemStr = localStorage.getItem("bagItems");
  bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];

  //   if (bagItemStr) {
  //     bagItem = JSON.parse(bagItemStr);
  //   } else {
  //     bagItem = [];
  //   }

  displayBagCount();
  displayItem();
})();

function addToBag(itemId) {
  bagItems.push(itemId);

  localStorage.setItem("bagItems", JSON.stringify(bagItems));

  displayBagCount();
}

function displayBagCount() {
  let count = document.querySelector(".bag-item-count");

  if (bagItems.length > 0) {
    count.style.visibility = "visible";
    count.innerHTML = bagItems.length;
  } else {
    count.style.visibility = "hidden";
  }
}

function displayItem() {
  let itemsContainer = document.querySelector(".items-container");

  if (itemsContainer) {
    items.forEach((item) => {
      itemsContainer.innerHTML += `<div class="item-container">
          <img class="item-image" src="${item.image}" alt="Image 1" />
          <div class="ratings">${item.rating.stars} ⭐ | ${item.rating.count}k</div>
          <div class="company-name">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
          <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
          </div>
          <button onclick="addToBag(${item.id})" class="btn-add-bag">Add to Bag</button>
        </div>`;
    });
  }
}
