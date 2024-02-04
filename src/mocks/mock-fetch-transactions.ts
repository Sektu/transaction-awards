import transactionsData from "../../data/transactions.json";

export const mockFetchTransactions = async () => {
  return new Promise((resolve) => {
    const randomTimeout = Math.floor(Math.random() * 6) * 1000;
    setTimeout(() => {
      resolve(transactionsData);
    }, randomTimeout);
  });
};
