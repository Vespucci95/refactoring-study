class Person {
  #name
  constructor(name) {
    this.#name = name
  }
  get name() {
    return this.#name
  }
  get genderCode() {
    return 'X'
  }
}
class Male extends Person {
  get genderCode() {
    return 'M'
  }
}
class Female extends Person {
  get genderCode() {
    return 'F'
  }
}

const createPerson = name => new Person(name)
const createMale = name => new Male(name)
const createFemale = name => new Female(name)

const loadFromInput = data => {
  const result = [];
  data.forEach(aRecord => {
    let p;
    switch (aRecord.gender) {
        case 'M':
            p = new Male(aRecord.name)
            break
        case 'F':
            p = new Female(aRecord.name)
            break
        default:
            p = new Person(aRecord.name)
    }
    result.push(p);
  });
  return result;
}

const people = [new Male('재남'), new Female('지금'), new Male('로이'), new Female('이지')]
const numberOfMales = people.filter(p => p instanceof Male).length
console.log(numberOfMales)
