const products = Array.from({ length: 20 }, (_, index) => ({
    image: `https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln304g5yiuk3ff_tn`,
    name: `Bàn phím cơ không dây AULA F75 - Hỗ trợ hotswap - LED RGB nhiều chế độ - 3 mode kết nối tiện lợi`,
    deal: `Mua Kèm Deal Sốc`,
    newPrice: `760.000`,
    oldPrice: `1.400.000`,
    discount: `46%`,
    rating: 5,
    soldCount: `3,4k`,
    origin: `TP Hồ Chí Minh`,
}));
  
const productList = document.querySelector('.product__list');
products.forEach((product) => {
    const card = document.createElement('div');
    card.classList.add('product__card');
  
    const item = document.createElement('div');
    item.classList.add('home-product-item');
  
    const image = document.createElement('div');
    image.classList.add('home-product-item-img');
    image.style.backgroundImage = `url(${product.image})`;
    item.appendChild(image);
  
    const name = document.createElement('h4');
    name.classList.add('home-product-item-name');
    name.textContent = product.name;
    item.appendChild(name);
  
    const sales = document.createElement('div');
    sales.classList.add('home-product-item-sales');
    const deal = document.createElement('span');
    deal.classList.add('home-product-item-deal');
    deal.textContent = product.deal;
    sales.appendChild(deal);
    item.appendChild(sales);
  
    const price = document.createElement('div');
    price.classList.add('home-product-item-price');
    const newPrice = document.createElement('span');
    newPrice.classList.add('home-product-item-new-price');
    newPrice.textContent = `đ${product.newPrice}`;
    price.appendChild(newPrice);
    const oldPrice = document.createElement('span');
    oldPrice.classList.add('home-product-item-old-price');
    oldPrice.textContent = `đ${product.oldPrice}`;
    price.appendChild(oldPrice);
    const discount = document.createElement('span');
    discount.classList.add('home-product-item-discount');
    discount.textContent = `-${product.discount}`;
    price.appendChild(discount);
    item.appendChild(price);
  
    const rating = document.createElement('div');
    rating.classList.add('home-product-item-rating');
    const starContainer = document.createElement('div');
    starContainer.classList.add('home-product-item-star');
    for (let i = 0; i < product.rating; i++) {
      const star = document.createElement('i');
      star.classList.add('fa-solid', 'fa-star');
      starContainer.appendChild(star);
    }
    rating.appendChild(starContainer);
    const soldCount = document.createElement('span');
    soldCount.classList.add('home-product-item-sold-count');
    soldCount.textContent = `Đã bán ${product.soldCount}`;
    rating.appendChild(soldCount);
    item.appendChild(rating);
  
    const origin = document.createElement('div');
    origin.classList.add('home-product-item-origin');
    const originName = document.createElement('span');
    originName.classList.add('home-product-item-origin-name');
    originName.textContent = product.origin;
    origin.appendChild(originName);
    item.appendChild(origin);
  
    const favourite = document.createElement('div');
    favourite.classList.add('home-product-item-favourite');
    const favouriteText = document.createElement('span');
    favouriteText.textContent = 'Yêu Thích';
    const favouriteIcon = document.createElement('i');
    favouriteIcon.classList.add('fa-solid', 'fa-plus');
    favourite.appendChild(favouriteText);
    favourite.appendChild(favouriteIcon);
    item.appendChild(favourite);
  
    card.appendChild(item);
  
    productList.appendChild(card);
  });
  