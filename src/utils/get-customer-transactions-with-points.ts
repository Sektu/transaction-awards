import {
  Customer,
  Transaction,
  TransactionWithAwardPoints,
} from "../types/types";
import { calculateAward } from "./calculate-award";

export const getCustomerTransactionsWithPoints = (
  { id }: Customer,
  transactions: Transaction[]
) => {
  const customerTransactions = transactions.filter((t) => t.customer_id === id);

  const transactionsPerMonth = customerTransactions.reduce((acc, ct) => {
    const month = ct.date.toLocaleString("default", { month: "long" });
    if (!acc[month]) {
      acc[month] = [];
    }
    const award_points = calculateAward(ct.total);
    return {
      ...acc,
      [month]: [...acc[month], { ...ct, award_points }],
    };
  }, {} as Record<string, TransactionWithAwardPoints[]>);

  return transactionsPerMonth;
};
