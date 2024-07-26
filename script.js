const parent = document.querySelector('.grid-row2');
const product = document.querySelector('.grid-2-4-column');

let n = 19;
const duplicates = Array(n).fill(null);

duplicates.forEach(() => {
    const cloneProduct = product.cloneNode(true);
    parent.appendChild(cloneProduct);
});