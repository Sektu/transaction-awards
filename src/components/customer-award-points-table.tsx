import { Customer, Transaction } from "../types/types";
import { getCustomerTransactionsWithPoints } from "../utils/get-customer-transactions-with-points";
import { getCustomerMonthsSummary } from "../utils/get-customer-months-summary";
import { getThreeMonthsSummary } from "../utils/get-three-months-summary";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export type CustomerAwardPointsTableProps = {
  customer: Customer;
  transactions: Transaction[];
};
export const CustomerAwardPointsTable = ({
  customer,
  transactions,
}: CustomerAwardPointsTableProps) => {
  const transactionsPerMonth = getCustomerTransactionsWithPoints(
    customer,
    transactions
  );

  const summaryPerMonth = getCustomerMonthsSummary(transactionsPerMonth);
  const threeMonthsSummary = getThreeMonthsSummary(summaryPerMonth);

  return (
    <TableContainer>
      <Table variant="striped" size="lg">
        <Thead>
          <Tr>
            <Th>Month</Th>
            <Th isNumeric>Award points</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(summaryPerMonth).map((month) => {
            const summary = summaryPerMonth[month];
            return (
              <Tr>
                <Td>{month}</Td>
                <Td isNumeric>{summary}</Td>
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Total</Th>
            <Th isNumeric>{threeMonthsSummary}</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
