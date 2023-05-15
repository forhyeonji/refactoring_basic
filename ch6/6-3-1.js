export function price(order) {
  // ✏️ 변수명은 간단한 정보로 전달이 된다면 간단하게
  const basePrice = order.quantity * order.itemPrice;
  const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);
  return basePrice - discount + shipping;
}
