// let defaultOwner = { firstName: '마틴', lastName: '파울러' };
// ✏️ return defaultOwner 의 경우
// ✏️ 객체의 참조값이 담긴 변수를 넘기면 여기저기서 수정이 가능해진다.
// ✏️ 불변성을 지키기 힘들어 진다.

class Person {
  #lastName;
  #firstName;
  constructor(data) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }
  get lastName() {
    return this.#lastName;
  }
  get firstName() {
    return this.#firstName;
  }
}

let defaultOwner = new Person({ firstName: '마틴', lastName: '파울러' });

export function getDefaultOwner() {
  // ✅ 객체를 복사하여 새로운 객체로 반환한다.
  // ✅ 그러나 아래는 얕은복사이기 때문에 클래스로 반환하는 것을 추천한다.
  // return { ...defaultOwner };

  // 클래스로 만들고 난 후는 안전하다.
  return defaultOwner;
}
