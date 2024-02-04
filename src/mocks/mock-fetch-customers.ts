import customersData from "../../data/customers.json";

export const mockFetchCustomers = async () => {
  return new Promise((resolve) => {
    const randomTimeout = Math.floor(Math.random() * 6) * 1000;
    setTimeout(() => {
      resolve(customersData);
    }, randomTimeout);
  });
};
