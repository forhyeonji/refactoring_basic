// 예제 1
function setWidth(value){
  this._width = value;
}

function setHeight(value){
  this._height = value;
}

// 예제 2
class Concert {
  regularBook(customer) {}
  premiumBook(customer) {}
  // ✏️ 정말정말 필요한 경우에만 boolaen 인자를 받는 private 함수를 만들어도 괜찮다.
  // ex) 코드의 중복이 많을경우
  #book(customer, isPremium){}
}

// 예제 3
function switchOn();
function switchOff();
