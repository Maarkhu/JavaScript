
const basket = new Basket();
const buyBtns = [...document.querySelectorAll('[data-name]')];
const basketUl = document.querySelector('.basket-list');
const buyAllBtn = document.querySelector('.btn-buy-all');
// ta metoda [...cośtam] rozbija obiekt lub tablicę i zamyka w nowej tablicy
//dzięki temu mamy pewność, że pracujemy na tablicy
//console.log([...buyBtns]);
//addEventListener nie działa na tablicy tylko na konkretnym elemencie
// buyBtns[0].addEventListener('click', () => {

const createBasketUi = () => {
    basketUl.innerText = ''
    for (const oneProductInfo of basket.getBasketSummary()) {
        const newLi = document.createElement('li')
        newLi.innerText = oneProductInfo
        basketUl.appendChild(newLi)
    }
    const basketTotalValue = basket.getTotalValue();
    console.log(basketTotalValue);
    buyAllBtn.innerText = `Złóż zmówienie w kwocie ${basketTotalValue.toFixed(2)}zł.`;

    buyAllBtn.disabled = basketTotalValue === 0;

// if (basketTotalValue >0) {
//     buyAllBtn.disabled = false;
// } else {
//     buyAllBtn.disabled = true;

    // if (basketTotalValue > 0) {
    //     buyAllBtn.removeAttribute('disabled') }
    //     else {
    //         buyAllBtn.setAttribute('disabled', 'true');
    // }

};

//     console.log('Kliknięty')
const addProductToBasket = event => {
        const name = event.target.dataset.name;
        const price = Number(event.target.dataset.price);
        const newProduct = new Product(name, price);
        console.log(newProduct);
    basket.add(newProduct);
    createBasketUi();
}
const buyAllProducts = () => {
    alert(`Za`)
    basket.clear();
    createBasketUi();
}

// })
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', addProductToBasket);
}

// buyBtns[0].addEventListener('click', () => {
//     console.log('Kliknięty', buyBtns[0])
//     console.log('Kliknięty', this) // <= przy funkcji strzałkowej źle zadziała bo wyświetli window, wtedy funkcja nie tworzy własnego kontekstu dla this
// })
buyAllBtn.addEventListener('click', buyAllProducts)

