import { HStack, Box, Divider, Flex } from "@chakra-ui/react";
import { useState } from "react";
import CarDetails from "./CarDetails.jsx";

import GoHome from "./GoHome.jsx";

const SavedCars = () => {
  const [savedCars, setSavedCars] = useState(
    JSON.parse(localStorage.getItem("savedCars")) || []
  );

  return (
    <>
      <Flex justify="flex-start" padding="5">
        <div>
          <GoHome path={"/"} />
        </div>
      </Flex>
      <Box position="relative" padding="10">
        <Divider />
      </Box>
      <HStack
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {savedCars.map((car, index) => (
          <CarDetails car={car} setSavedCars={setSavedCars} key={index} />
        ))}
      </HStack>
    </>
  );
};

export default SavedCars;
