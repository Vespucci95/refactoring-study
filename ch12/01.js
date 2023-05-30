class Party {
  monthlyCost
  get annualCost() {
    return this.monthlyCost * 12
  }
}

class Employee extends Party {
  monthlyCost = 10
}
class Department extends Party {
  monthlyCost = 20
}

const e = new Employee()
const d = new Department()

console.log(e.annualCost, d.annualCost)

