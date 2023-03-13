class TelephoneNumber {
  get areaCode() {
    return this._areaCode
  }
  set areaCode(arg) {
    this._areaCode = arg
  }
  get number() {
    return this._number
  }
  set number(arg) {
    this._number = arg
  }
  toString() {
    return `(${this.areaCode}) ${this.number}`
  }
}

class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }
  get name() {
    return this._name
  }
  set name(arg) {
    this._name = arg
  }
  get telephoneNumber() {
    this._telephoneNumber.toString()
  }
}
