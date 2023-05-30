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
    this._name = name
    this.type = type;
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

  toString() {
    return `${this._name} is a ${this.type.capitalizedType}`
  }
}

class EmployeeType {
  get capitalizedType() {
    return this.toString().charAt(0).toUpperCase() + this.toString().slice(1).toLowerCase()
  }
}

class Engineer extends EmployeeType {
  toString() {return "engineer"}
}
class Manager extends EmployeeType {
  toString() {return "manager"}
}
class SalesPerson extends EmployeeType {
  toString() {return "salesperson"}
}

console.log(new Employee('roy', 'engineer').toString())
console.log(new Employee('jay', 'manager').toString())
console.log(new Employee('kay', 'salesperson').toString())
// console.log(new Employee('tei', 'nobody').toString())
