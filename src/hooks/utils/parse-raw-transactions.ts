import { Transaction, RawTransaction } from "../../types/types";

export const parseRawTransaction = (raw: RawTransaction): Transaction => {
  return { ...raw, date: new Date(raw.date) };
};
