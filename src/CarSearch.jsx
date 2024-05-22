import { Input, HStack, Button } from "@chakra-ui/react";

const CarSearch = () => {
  return (
    <>
      <div>
        <HStack spacing={3}>
          <Input placeholder="Year" size="sm" />
          <Input placeholder="Make" size="sm" />
          <Input placeholder="Model" size="sm" />
          <Button
            // isLoading
            colorScheme="blackAlpha"
            variant="outline"
            size="md"
          >
            Search
          </Button>
        </HStack>
      </div>
    </>
  );
};

export default CarSearch;
