import { TransactionWithAwardPoints } from "../types/types";

export const getCustomerMonthsSummary = (
  transactionsPerMonth: Record<string, TransactionWithAwardPoints[]>
) => {
  const months = Object.keys(transactionsPerMonth);

  return months.reduce((acc, m) => {
    const awardsPointsPerMonth = transactionsPerMonth[m].reduce(
      (monthSum, t) => {
        return monthSum + t.award_points;
      },
      0
    );
    acc[m] = awardsPointsPerMonth;
    return acc;
  }, {} as Record<string, number>);
};
