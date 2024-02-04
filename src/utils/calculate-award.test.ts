import { calculateAward } from "./calculate-award";

// A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar
// spent between $50 and $100 in each transaction.
// (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).

describe("testing calculateAward", () => {
  test("less and equal to 50", () => {
    expect(calculateAward(-10)).toBe(0);
    expect(calculateAward(0)).toBe(0);
    expect(calculateAward(25)).toBe(0);
    expect(calculateAward(50)).toBe(0);
  });

  test("more than 50 and less or equal to 100", () => {
    expect(calculateAward(51)).toBe(1);
    expect(calculateAward(75)).toBe(25);
    expect(calculateAward(75.01)).toBe(25);
    expect(calculateAward(99)).toBe(49);
    expect(calculateAward(99.999999999)).toBe(49);
    expect(calculateAward(100)).toBe(50);
  });

  test("more than 100", () => {
    expect(calculateAward(101)).toBe(52);
    expect(calculateAward(120)).toBe(90);
    expect(calculateAward(300)).toBe(450);
    expect(calculateAward(9999)).toBe(19848);
    expect(calculateAward(9999.999999)).toBe(19848);
  });
});
