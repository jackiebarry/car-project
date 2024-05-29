import { Box, Divider } from "@chakra-ui/react";
import CarSearch from "./CarSearch";

import GoHome from "./GoHome";

const CarCompare = () => {
  return (
    <>
      <div>
        <GoHome path={"/"} />
      </div>
      <Box position="relative" padding="10">
        <Divider />
      </Box>{" "}
      <CarSearch />
    </>
  );
};

export default CarCompare;
