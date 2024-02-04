import { CustomerAwardPointsTable } from "./customer-award-points-table";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  SimpleGrid,
} from "@chakra-ui/react";
import { useFetchCustomers } from "../hooks/use-fetch-customers";
import { useFetchTransactions } from "../hooks/use-fetch-transactions";

export const CustomersAwardsTables = () => {
  const customers = useFetchCustomers();
  const transactions = useFetchTransactions();

  return (
    <SimpleGrid columns={[1, 2, 3]} spacingX="10px" spacingY="10px">
      {customers.map((c) => {
        return (
          <Card size="sm">
            <CardHeader>
              <Heading size="md">{`${c.first_name} ${c.last_name}`}</Heading>
            </CardHeader>
            <CardBody>
              <CustomerAwardPointsTable
                key={c.id}
                customer={c}
                transactions={transactions}
              ></CustomerAwardPointsTable>
            </CardBody>
          </Card>
        );
      })}
    </SimpleGrid>
  );
};
