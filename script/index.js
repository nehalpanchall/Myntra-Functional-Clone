const addToBag = (id) => {
  alert(id);
};

(() => {
  let itemsContainer = document.querySelector(".items-container");

  items.forEach((i) => {
    itemsContainer.innerHTML += `<div class="item-container">
          <img class="item-image" src="${i.image}" alt="Image 1" />
          <div class="ratings">${i.rating.stars} ⭐ | ${i.rating.count}k</div>
          <div class="company-name">${i.company}</div>
          <div class="item-name">${i.item_name}</div>
          <div class="price">
            <span class="current-price">Rs ${i.current_price}</span>
            <span class="original-price">Rs ${i.original_price}</span>
            <span class="discount">(${i.discount_percentage}% OFF)</span>
          </div>
          <button onclick="addToBag('${i.id}')" class="btn-add-bag">Add to Bag</button>
        </div>`;
  });
})();
