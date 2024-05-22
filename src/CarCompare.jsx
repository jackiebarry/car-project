import { Divider } from "@chakra-ui/react";
import CarSearch from "./CarSearch";

import GoHome from "./GoHome";

const CarCompare = () => {
  return (
    <>
      <div>
        <GoHome path={"/"} />
      </div>
      <Divider />
      <CarSearch />
    </>
  );
};

export default CarCompare;
