export function inNewEngland(state) {
  // ✏️ 함수안에서 꼭 필요한 데이터만 받는다. 재사용성 Up
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
