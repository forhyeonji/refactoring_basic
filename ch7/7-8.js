class Person {
  #name;
  #manager;
  #chargeCode;
  constructor(name, manager, chargeCode) {
    this.#name = name;
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  // ✏️ : new 인스턴스를 안에서 만들어서 숨겨준다!

  get name() {
    return this.#name;
  }

  get manager() {
    return this.#manager;
  }

  get chargeCode() {
    return this.#chargeCode;
  }
}

const person = new Person('Tom', 'aManager', '999');
console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);
