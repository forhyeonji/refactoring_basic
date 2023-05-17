export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  isHighPriority() {
    return this.priority.higherThan(new Priority('normal'));
  }
}

class Priority {
  #value;
  constructor(value) {
    if (Priority.legalValues().includes(value)) {
      this.#value = value;
    } else {
      // ✏️ : 생성자 안에서 Error를 던지는 것은 보안에 취약하다.
      throw new Error(`${value}  is invalid for Priority`);
    }
  }

  get index() {
    return Priority.legalValues().indexOf(this.#value);
  }

  equals(other) {
    return this.#index === other.index;
  }

  higherThan(other) {
    return this.#index > other.index;
  }

  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }
}

const orders = [
  new Order(new Priority('normal')),
  new Order(new Priority('high')),
  new Order(new Priority('rush'))
];

const highPriorityCount = orders.filter((o) => o.isHighPriority).length;
