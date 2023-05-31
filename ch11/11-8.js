export class Employee {
  // ✏️: 생성자를 private 하게 만들면 좋지만 js에는 그런 기능이 x. 밑의 코드는
  // 생성자를 private 하게 만들어서 외부에서 사용못하게 했다고 가정함.
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
  }

  // 아래는 생성자 함수를 잠근대신 사용할 수 있는 생성자함수 대신의 함수
  static createEngineer(name) {
    return new Employee(name, 'E');
  }

  static createSeniorEngineer(name) {
    return new Employee(name, 'SE');
  }

  static createMarketer(name) {
    return new Employee(name, 'M');
  }
}

// ✏️ 사용법 (이제 이름만 전달하면 된다.)
const employee = Employee.createEngineer('엘리');
