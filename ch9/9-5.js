const customerRepository = new CustomerRepository();

// ✏️ 2) 이런식으로 생성할때 repository를 주입한다.
const order = new Order(
  data.number,
  customerRepository.registerCustomer(data.customerId)
);
class Order {
  constructor(number, customer) {
    this._number = number;
    // ✏️ 1) 메인 클래스 constructor 안에서 레파지토리 인스턴스를 실행하는것은 너무 무거워서 비추천
    // this._customer = customerRepository.registerCustomer(data.customerId);
    this._customer = customer;

    // 참조값에 유니크한 값이나 정보가 변동되었을때 즉각적으로 다른곳에서 업데이트를 해주어야 하는 경우에는
    // 참조값을 값으로 바꿔서 사용한다!
    // 하나의 인스턴스라는 것을 보장하기 위해서 레파지토리 패턴 사용하기
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}

class CustomerRepository {
  #customers;

  constructor() {
    this.#customers = new Map();
  }

  registerCustomer(id) {
    if (!this.#customers.has(id)) {
      this.#customers.set(id, new Customer(id));
    }
    return findCustomer(id);
  }

  findCustomer(id) {
    return this.#customers.get(id);
  }
}
