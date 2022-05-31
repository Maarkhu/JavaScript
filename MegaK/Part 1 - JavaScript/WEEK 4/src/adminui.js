const addProductForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector('[name="product-name"] ');
const priceInput = document.querySelector('[name="product-price"]');
const listaProd = document.querySelector('.lista-prod');

const saveProductToLocalStorage = (name, price) => {
  const productsList = JSON.parse(localStorage.getItem('shop-products')) ?? [];
  productsList.push({ name, price });
  localStorage.setItem('shop-products', JSON.stringify(productsList));
};

const addProductToShop = (name, price) => {
  const newLi = document.createElement('li'); // <li>
  const newStrong = document.createElement('strong');
  newStrong.innerText = name;

  const newPriceText = document.createTextNode(` - ${price.toFixed(2)}`);

  const newBtn = document.createElement('button');
  newBtn.innerText = 'Kup!';
  newBtn.classList.add('btn-buy-product');
  newBtn.dataset.name = name;
  newBtn.dataset.price = price;
  newBtn.addEventListener('click', addProductToBasket);

  newLi.appendChild(newStrong);
  newLi.appendChild(newPriceText);
  newLi.appendChild(newBtn);

  listaProd.appendChild(newLi);
};

const loadProductsFromLocalStorage = () => {
  const productsList = JSON.parse(localStorage.getItem('shop-products')) ?? [];
  for (const product of productsList) {
    const { name, price } = product;
    addProductToShop(name, price);
  }
};

const handleAddProductFormSubmit = (event) => {
  event.preventDefault();
  // console.log('Haloo...?', event);
  // console.log('Marek', event.target.elements['product-name'].value);
  console.log(nameInput.value);

  const nameFromInput = nameInput.value;
  const priceFromInput = Number(priceInput.value);

  addProductToShop(nameFromInput, priceFromInput);
  saveProductToLocalStorage(nameFromInput, priceFromInput);
};

addProductForm.addEventListener('submit', handleAddProductFormSubmit);

loadProductsFromLocalStorage();
