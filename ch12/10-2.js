class Bird {
  _name
  _feather
  constructor(data) {
    this._name = data.name
    this._feather = data.feather
    this._speciesDelegate = this.selectSpeciesDelegate(data)
  }
  get name() {
    return this._name
  }
  get feather() {
    return this._feather || '보통'
  }
  get airSpeedVelocity() {
    return this._speciesDelegate ? this._speciesDelegate.airSpeedVelocity : null;
  }
  selectSpeciesDelegate(data) {
    switch (data.type) {
      case 'european':
        return new EuropeanSwallowDelegate()
      case 'african':
        return new AfricanSwallowDelegate(data)
      default:
        return null;
    }
  }
}

class EuropeanSwallowDelegate {
  get airSpeedVelocity() {
    return 35
  }
}
class AfricanSwallow extends Bird {
  #numberOfCoconuts
  constructor(data) {
    super(data)
    this.#numberOfCoconuts = data.numberOfCoconuts
  }
  get airSpeedVelocity() {
    return this._speciesDelegate.airSpeedVelocity
  }
}

class AfricanSwallowDelegate {
  #numberOfCoconuts
  constructor(data) {
    this.#numberOfCoconuts = data.numberOfCoconuts
  }
  get airSpeedVelocity() {
    return 40 - 2 * this.#numberOfCoconuts
  }
}

class NorwegianBlueParrot extends Bird {
  #voltage
  #isNailed
  constructor(data) {
    super(data)
    this.#voltage = data.voltage
    this.#isNailed = data.isNailed
  }
  get feather() {
    if (this.#voltage > 100) return '그을림'
    return this._feather || '예쁨'
  }
  get airSpeedVelocity() {
    return this.#isNailed ? 0 : 10 + this.#voltage / 10
  }
}

const createBird = data => {
  switch (data.type) {
    case 'european':
      return new Bird(data)
    case 'african':
      return new AfricanSwallow(data)
    case 'norwegian':
      return new NorwegianBlueParrot(data)
    default:
      return new Bird(data)
  }
}

const birds = [
  createBird({ type: 'european', name: '유제' }),
  createBird({ type: 'african', name: '아제1', numberOfCoconuts: 2 }),
  createBird({ type: 'african', name: '아제2', numberOfCoconuts: 4 }),
  createBird({ type: 'norwegian', name: '파앵1', isNailed: false, voltage: 3000 }),
  createBird({ type: 'norwegian', name: '파앵2', isNailed: true, voltage: 50 }),
  new Bird({ name: '가짜새' }),
]
console.log(birds.map(b => ({ name: b.name, velocity: b.airSpeedVelocity, feather: b.feather })))
