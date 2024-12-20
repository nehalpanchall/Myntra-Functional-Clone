let bagItem = [];

function addToBag(itemId) {
  bagItem.push(itemId);
  let count = document.querySelector(".bag-item-count");
  count.innerHTML = bagItem.length;
}

function displayItem() {
  let itemsContainer = document.querySelector(".items-container");

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

displayItem();
