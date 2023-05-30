class Employee {
  #name
  _type
  constructor(name, type) {
    this.validateType(type)
    this.#name = name
    this._type = type
  }
  validateType(arg) {
    if (!['engineer', 'manager', 'salesperson'].includes(arg)) throw new Error(`${arg}라는 직원 유형은 없습니다.`)
  }
  get typeString() {
    return this._type.toString();
  }
  get type() {
    return this._type
  }
  set type(arg) {
    this._type = arg
  }
  get capitalizedType() {
    return this.typeString.charAt(0).toUpperCase() + this.typeString.slice(1).toLowerCase()
  }
  toString() {
    return `${this.#name} is a ${this.capitalizedType}`
  }
}

class EmployeeType {
  constructor(str) {
    this._value = str;
  }
  toString() { return this._value }
}

console.log(new Employee('roy', 'engineer').toString())
console.log(new Employee('jay', 'manager').toString())
console.log(new Employee('kay', 'salesperson').toString())
console.log(new Employee('tei', 'nobody').toString())
