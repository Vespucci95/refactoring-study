class Person {
  #name
  #genderCode
  constructor(name,genderCode) {
    this.#name = name
    this.#genderCode = genderCode;
  }
  isMale() {
    return this.genderCode  === 'M';
  }
  get name() {
    return this.#name
  }
  get genderCode() {
    return this.#genderCode;
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

// const createPerson = name => new Person(name)
// const createMale = name => new Male(name)
// const createFemale = name => new Female(name)

const createPerson = aRecord => {
  let p;
  switch (aRecord.gender) {
    case 'M':
      p = new Person(aRecord.name, 'M')
      break
    case 'F':
      p = new Person(aRecord.name, 'F')
      break
    default:
      p = new Person(aRecord.name, "X")
  }
  return p
}
const loadFromInput = data => data.map(aRecord => createPerson(aRecord));

const people = [new Male('재남'), new Female('지금'), new Male('로이'), new Female('이지')]


const numberOfMales = people.filter(p => p.isMale()).length
console.log(numberOfMales)
