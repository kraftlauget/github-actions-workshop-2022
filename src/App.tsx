import "./App.css";
import { Box, Heading, Image, Link, Stack } from "@chakra-ui/react";

import kraftlauget from "./kraftlauget.jpg";

const App = () => {
  return (
    <Box>
      <Stack mt="10rem" align="center">
        <Link href="https://kraftlauget.no/" isExternal>
          <Image src={kraftlauget} />
        </Link>
        <Heading fontSize="5rem">Kraftlauget Workshop</Heading>
      </Stack>
    </Box>
  );
};

export default App;
