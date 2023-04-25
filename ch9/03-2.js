class ProductionPlan {
  #initialProduction
  #productionAccumulator = 0;
  #adjustments = []
  constructor(production) {
    this.#initialProduction = production;
    this.#productionAccumulator = 0;
    this.#adjustments = []
  }
  get production() {
    return this.#initialProduction + this.calculatedProductionAccumulator
  }
  get calculatedProductionAccumulator() {
    return this.#adjustments.reduce((sum,a) => sum + a.amount, 0)
  }

  applyAdjustment(anAdjustment) {
    this.#adjustments.push(anAdjustment)
    this.#productionAccumulator += anAdjustment.amount
  }
}

const products = new ProductionPlan(0)
products.applyAdjustment({ name: '사과', amount: 10 })
products.applyAdjustment({ name: '바나나', amount: 20 })

console.log(products.production)
