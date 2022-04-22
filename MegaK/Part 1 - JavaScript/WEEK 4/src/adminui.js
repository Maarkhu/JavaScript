const addProductForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector('[name="product-name"]');
const priceInput = document.querySelector('[name="product-price"]');

addProductForm.addEventListener('submit', event => {
    event.preventDefault();
    console.log('Haloo...?', event)
} )