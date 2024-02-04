export const calculateAward = (price: number) => {
  const fixedPrice = Math.trunc(price);
  if (fixedPrice > 100) {
    const over100 = fixedPrice - 100;

    const over100Award = over100 * 2;
    const between50And100Award = 50 * 1;

    return over100Award + between50And100Award;
  } else if (fixedPrice > 50) {
    const award = fixedPrice - 50;
    return award;
  } else {
    return 0;
  }
};
