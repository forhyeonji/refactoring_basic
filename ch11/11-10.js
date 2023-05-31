// ✏️ : 단순히 주어진 데이터를 이용해서 계산만해야 한다면 class 보다는 함수로 바꾸기!
function charge(customer, usage, provider) {
  const baseCharge = customer.baseRate * usage;
  return baseCharge + provider.connectionCharge;
}
