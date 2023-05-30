class Employee {
  _name
  _type
  static createEmployeeType(aString) {
    switch (aString) {
      case "engineer":
        return new Engineer();
      case "manager":
        return new Manager();
      case "salesperson":
        return new SalesPerson();
      default: throw new Error(`${aString}라는 직원 유형은 없습니다.`)
    }
  }
  constructor(name, type) {
    this.validateType(type)
    this._name = name
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
    this._type = Employee.createEmployeeType(arg);
  }
  get capitalizedType() {
    return this.typeString.charAt(0).toUpperCase() + this.typeString.slice(1).toLowerCase()
  }
  toString() {
    return `${this._name} is a ${this.capitalizedType}`
  }
}

class EmployeeType {
}

class Engineer extends EmployeeType {
  toString() {return "engineer"}
}
class Manager extends EmployeeType {
  toString() {return "engineer"}
}
class SalesPerson extends EmployeeType {
  toString() {return "engineer"}
}

console.log(new Employee('roy', 'engineer').toString())
console.log(new Employee('jay', 'manager').toString())
console.log(new Employee('kay', 'salesperson').toString())
// console.log(new Employee('tei', 'nobody').toString())
