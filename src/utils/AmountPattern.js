const amountPattern = (number) => {
  let num = number.toString();
  const pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(num)) {
    num = num.replace(pattern, '$1,$2');
  }
  return num;
};

export default amountPattern;
