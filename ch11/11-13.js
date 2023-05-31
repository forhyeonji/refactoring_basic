const values = [];
function getValueForPeriod(periodNumber) {
  const value = values[periodNumber];
  // ✏️ : 예상가능한 오류에 예외를 던지는건 남용이다!

  if (periodNumber < 0 || periodNumber >= values.length) {
    return 0;
  }

  return values[periodNumber];

  // 아래처럼 간단히 한줄로만 써도 됨
  // return values[periodNumber] ?? 0;
}

getValueForPeriod(-10);
