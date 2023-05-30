class Employee {
  #name
  #type
  constructor(name) {
    this.#name = name
  }
  get type() {
    return '';
  }
  toString() {
    return `${this.#name} is a ${this.#type}`
  }
}

class Engineer extends Employee {
  get type() {
    return 'engineer'
  }
}
class SalesPerson extends Employee {
  get type() {
    return 'salesperson'
  }
}
class Manager extends Employee {
  get type() {
    return 'manager'
  }
}

const createEmployee = (name, type) => {
    switch(type) {
      case 'engineer':
        return new Engineer(name)
      case 'salesperson':
        return new SalesPerson(name)
      case 'manager':
        return new Manager(name)
      default:
        throw new Error(`${type}라는 직원 유형은 없습니다.`)
    }
}

const roy = createEmployee('roy', 'engineer')
const jay = createEmployee('jay', 'manager')
const kay = createEmployee('kay', 'salesperson')
const tei = createEmployee('tei', 'nobody')
