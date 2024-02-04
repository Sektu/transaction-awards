import { useEffect, useState } from "react";
import { Customer } from "../types/types";
import { mockFetchCustomers } from "../mocks/mock-fetch-customers";

export const useFetchCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const fetchCustomers = async () => {
    setCustomers((await mockFetchCustomers()) as unknown as Customer[]);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return customers;
};
