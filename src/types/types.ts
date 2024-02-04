export type Customer = {
  id: number;
  first_name: string;
  last_name: string;
};

export type Transaction = {
  id: number;
  customer_id: number;
  date: Date;
  total: number;
};

export type TransactionWithAwardPoints = Transaction & {
  award_points: number;
};

export type RawTransaction = Omit<Transaction, "date"> & {
  date: string;
};

export type CustomerAwards = {
  customer_id: number;
  pointsPerMonth: Record<string, number>;
};
