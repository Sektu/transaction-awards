import { useEffect, useState } from "react";
import { mockFetchTransactions } from "../mocks/mock-fetch-transactions";
import { Transaction, RawTransaction } from "../types/types";
import { parseRawTransaction } from "./utils/parse-raw-transactions";

export const useFetchTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async () => {
    const rawTransactions =
      (await mockFetchTransactions()) as unknown as RawTransaction[];

    const transactions = rawTransactions.map(parseRawTransaction);
    setTransactions(transactions);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return transactions;
};
