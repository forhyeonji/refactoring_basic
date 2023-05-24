const STANDARD_GRAVITY = 9.81;
// ✏️ 1) 코드상에서 특정한 숫자가 나오면 상수화 시켜서 코드에 사용하면 숫자의 의미를 파악 할 수 있다.

function potentialEnergy(mass, height) {
  return mass * STANDARD_GRAVITY * height;
}
