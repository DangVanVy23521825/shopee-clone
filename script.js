const parent = document.querySelector('.product__list');
const product = document.querySelector('.product__card');

let n = 20;
const duplicates = Array(n - 1).fill(null);

duplicates.forEach(() => {
    const cloneProduct = product.cloneNode(true);
    parent.appendChild(cloneProduct);
});