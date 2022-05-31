class Basket {
  constructor() {
    this.items = [];
    this.totalValue = 0;
  }

  add(item) {
    this.items.push(item);
    this.addToTotalValue(item.price);
  }

  addToTotalValue(newPrice) {
    this.totalValue += newPrice;
  }

  getTotalValue() {
    return this.items.reduce((prev, curr) => prev + curr.price, 0);
  }

  showBasket() {
    this.items
      .map((product, i) => `${i + 1} - ${product.name} - ${product.price.toFixed(2)}zł.`)
      .forEach((line) => console.log(line));
  }

  remove(no) {
    this.items.splice(no - 1, 1);
  }
}

class Product {
  constructor(productName, productPrice) {
    this.name = productName;
    this.price = productPrice;
  }

  setNewPrice(newPrice) {
    this.price = newPrice;
  }
}
const shopBasket = new Basket();
const oranges = new Product("Pomarańcze LUZ", 7.55);
console.log(oranges);
const cucumbers = new Product("Ogórki", 9.50);
shopBasket.add(cucumbers);
shopBasket.add(cucumbers);
shopBasket.add(oranges);
console.log(shopBasket);
console.log(shopBasket.getTotalValue());
shopBasket.remove(2);
shopBasket.showBasket();
