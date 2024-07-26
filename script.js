// Get the parent element where you want to duplicate the product card
const parentElement = document.querySelector('.grid-row');
console.log(parentElement);
// Get the product card element you want to duplicate
const productCard = document.querySelector('.grid-2-4-column');

let n = 10;

// Create an array of n elements (replace 'n' with the desired number of duplicates)
const duplicates = Array(n).fill(null);
// Loop through the array and duplicate the product card
duplicates.forEach(() => {
  // Clone the product card
  const clonedProductCard = productCard.cloneNode(true);

  // Append the cloned product card to the parent element
  parentElement.appendChild(clonedProductCard);
});