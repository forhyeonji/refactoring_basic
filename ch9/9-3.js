// 예제 1
class Order {
  // 다른 코드 있다고 가정
  get discountedTotal() {
    // ✏️ 2) 아래와 같이 get하는 순간에 계산해서 반영하기!
    return this._basePrice - this._discount;
  }

  set discount(value) {
    const old = this._discount;
    this._discount = value;
    // ✏️ 1) 이렇게 discount를 바꿨을 뿐인데 다른 필드의 값도 바뀌는건 💩
    this._discountedTotal += old - value;
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  get production() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
  }
}
