class List {}

class Stack {
  constructor() {
    this.storage = new List();
  }
  // pop과 push는 list를 사용해서 api를 제공!
  // 위임을 하게 되면 list의 원하는 기능만 제공할 수 있다!!
  pop() {}
  push() {}
}
