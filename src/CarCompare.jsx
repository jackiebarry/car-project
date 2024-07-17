import { Box, Divider, Flex } from "@chakra-ui/react";
import CarSearch from "./CarSearch.jsx";

import GoHome from "./GoHome.jsx";

const CarCompare = () => {
  return (
    <>
      <Flex justify="flex-start" padding="5">
        <div>
          <GoHome path={"/"} />
        </div>
      </Flex>
      <Box position="relative" padding="10">
        <Divider />
      </Box>{" "}
      <CarSearch />
      <Box position="relative" padding="10">
        <Divider />
      </Box>{" "}
    </>
  );
};

export default CarCompare;
