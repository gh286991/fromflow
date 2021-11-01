export const rentAmountCalculate = (basePrice, days, isEarn, washAmount) => {
  // Note: Max price discount
  const fourDayDiscount = 0.8;
  const eightDayDiscount = 0.7;
  const twelveDayDiscount = 0.7;
  const sixteenDayDiscount = 0.58;
  let dayDiscount;
  const earnPercent = isEarn ? 0.8 : 1.2;

  // Note: They use the four days discount amount as base line.....
  switch (days) {
    case 4:
      dayDiscount = fourDayDiscount;
      break;
    case 8:
      dayDiscount = eightDayDiscount;
      break;
    case 12:
      dayDiscount = twelveDayDiscount;
      break;
    case 16:
      dayDiscount = sixteenDayDiscount;
      break;
    default:
      dayDiscount = fourDayDiscount;
      break;
  }

  return Math.ceil(basePrice * days * earnPercent * dayDiscount + Number(washAmount));
};

export const baseDayRentAmountCalculate = (originPrice) => {
  const priceRate = 0.03;

  return Math.ceil(originPrice * priceRate);
};
