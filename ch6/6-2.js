// 예제 1
export function rating(driver) {
  // ✏️ 객체의 이름이 잘 정리되어 있고 특별한 검증이 필요하지 않으므로 인라인해주기
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
  // ✏️ 특별히 하는 일이 없으므로 인라인
  const result = [];
  result.push(['name', customer.name]);
  result.push(['location', customer.location]);
  return result;
}
