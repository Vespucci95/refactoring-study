import {it} from "mocha";
import assert from "assert";

class TelephoneNumber {
  #areaCode
  #number
  constructor(areaCode, number) {
    this.#areaCode = areaCode;
    this.#number = number;
  }
  get areaCode() {
    return this.#areaCode
  }
  set areaCode(arg) {
    this.#areaCode = arg
  }
  get number() {
    return this.#number
  }
  set number(arg) {
    this.#number = arg
  }
  equals(other) {
    if(!(other instanceof TelephoneNumber)) return false;
    return this.#areaCode === other.#areaCode && this.#number === other.#number
  }
}

class Person {
  #telephoneNumber
  constructor() {
    this.#telephoneNumber = new TelephoneNumber('','')
  }
  get officeAreaCode() {
    return this.#telephoneNumber.areaCode
  }
  set officeAreaCode(arg) {
    this.#telephoneNumber.areaCode = new TelephoneNumber(arg, this.officeNumber);
  }
  get officeNumber() {
    return this.#telephoneNumber.number
  }
  set officeNumber(arg) {
    this.#telephoneNumber.number = new TelephoneNumber(this.officeAreaCode, arg);
  }
}

const p1 = new Person()
p1.officeAreaCode = '312'
p1.officeNumber = '555-0142'

const p2 = new Person()
p2.officeAreaCode = '002'
p2.officeNumber = '333-333'

console.log(p1.officeAreaCode, p1.officeNumber)
console.log(p2.officeAreaCode, p2.officeNumber)


it('telephone equals', () => {
  assert(new TelephoneNumber("312", "555-0142").equals(new TelephoneNumber("312", "555-0142")))
})
