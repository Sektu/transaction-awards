import { CustomersAwardsTables } from "./components/customers-awards-tables";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: "25px",
      }}
    >
      <CustomersAwardsTables />
    </Box>
  );
}

export default App;
