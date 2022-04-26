const addProductForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector('[name="product-name"] ');
const priceInput = document.querySelector('[name="product-price"]');
const listaProd = document.querySelector('.lista-prod');

const addProductToShop = event => {
    event.preventDefault();
    // console.log('Haloo...?', event);
    // console.log('Marek', event.target.elements['product-name'].value);
    console.log(nameInput.value)
    const name = nameInput.value;
    const price = Number(priceInput.value);

    const newLi = document.createElement('li'); // <li>
    const newStrong = document.createElement('strong');
    newStrong.innerText = name;

    const newPriceText = document.createTextNode(` - ${price.toFixed(2)}`);

    const newBtn = document.createElement('button');
    newBtn.innerText = 'Kup!'
    newBtn.classList.add('btn-buy-product');
    newBtn.dataset.name = name;
    newBtn.dataset.price = price;
    newBtn.addEventListener('click', addProductToBasket);

    newLi.appendChild(newStrong);
    newLi.appendChild(newPriceText);
    newLi.appendChild(newBtn);


    listaProd.appendChild(newLi)
}

addProductForm.addEventListener('submit', addProductToShop);