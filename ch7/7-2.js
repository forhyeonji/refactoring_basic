export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return this.#courses;
  }

  addCourse(course) {
    this.#courses.push(course);
  }

  removeCourse(course, runIfAbsent) {
    const index = this.#courses.indexOf(course);
    if (index === -1) {
      runIfAbsent();
      return;
    }
    this.#courses.splice(index, 1);
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person('엘리');
const course = new Course('리팩토링', true);

// ✏️ : 컬렉션을 직접 건드리는게 아니라 addCourse 같은 함수를 만들어서 접근해야한다!
ellie.addCourse(course);
console.log(ellie.courses.length);

ellie.removeCourse(course, () => {
  console.log('삭제할 강의가 없다!');
});
console.log(ellie.courses.length);
