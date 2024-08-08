import products from './productData.js';
import createElement from './createElement.js';

const productList = document.querySelector('.product__list');
products.forEach((product) => {
  const card = createElement('div', 'product__card');

  const item = createElement('div', 'home-product-item');

  const image = createElement('div', 'home-product-item-img', '', { backgroundImage: `url(${product.image})` });
  item.appendChild(image);

  const name = createElement('h4', 'home-product-item-name', product.name);
  item.appendChild(name);

  const sales = createElement('div', 'home-product-item-sales');
  const deal = createElement('span', 'home-product-item-deal', product.deal);
  sales.appendChild(deal);
  item.appendChild(sales);

  const price = createElement('div', 'home-product-item-price');
  price.appendChild(createElement('span', 'home-product-item-new-price', `đ${product.newPrice}`));
  price.appendChild(createElement('span', 'home-product-item-old-price', `đ${product.oldPrice}`));
  price.appendChild(createElement('span', 'home-product-item-discount', `-${product.discount}`));
  item.appendChild(price);

  const rating = createElement('div', 'home-product-item-rating');
  const starContainer = createElement('div', 'home-product-item-star');
  for (let i = 0; i < product.rating; i++) {
      starContainer.appendChild(createElement('i', 'fa-solid fa-star'));
  }
  rating.appendChild(starContainer);
  rating.appendChild(createElement('span', 'home-product-item-sold-count', `Đã bán ${product.soldCount}`));
  item.appendChild(rating);

  const origin = createElement('div', 'home-product-item-origin');
  origin.appendChild(createElement('span', 'home-product-item-origin-name', product.origin));
  item.appendChild(origin);

  const favourite = createElement('div', 'home-product-item-favourite');
  favourite.appendChild(createElement('span', '', 'Yêu Thích'));
  favourite.appendChild(createElement('i', 'fa-solid fa-plus'));
  item.appendChild(favourite);

  card.appendChild(item);
  productList.appendChild(card);
});