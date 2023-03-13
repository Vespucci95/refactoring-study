class Order {
  _quantity
  _item
  constructor(quantity, item) {
    this._quantity = quantity
    this._item = item
  }
  get basePrice() {
    return this._quantity * this._item.price;
  }

  get discountFactor() {
    let discountFactor = 0.98
    if (this.basePrice > 1000) discountFactor -= 0.03
    return discountFactor;
  }
  get price() {
    let discountFactor = this.discountFactor;
    return this.basePrice * discountFactor
  }

}
const order = new Order(10, { price: 1000 })
console.log(order.price)
