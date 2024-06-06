import { Input, HStack, Button, Select } from "@chakra-ui/react";
import { useState } from "react";
import { fetchCarMakes } from "./HandleAPI";
import MakesArray from "./MakesArray";

const CarSearch = () => {
  const [year, setYear] = useState(null);
  const [models, setModels] = useState([]);
  const [make, setMake] = useState([]);

  console.log(models);
  // console.log(make);

  const onYearSelect = async (event) => {
    const selectedYear = event.target.value;
    setYear(selectedYear);
    const models = await fetchCarMakes(selectedYear);
    setModels(models);
  };

  const onMakeSelect = async (event) => {
    const selectedMake = event.target.value;
    setMake(selectedMake);
  };

  const onSearchClick = () => {
    alert(year, make);
  };
  return (
    <>
      <div>
        <HStack spacing={3}>
          <Select
            placeholder="Select Vehicle Year"
            onChange={onYearSelect}
            size="sm"
          >
            {Array(6)
              .fill(2015)
              .map((element, index) => {
                const year = element + index;
                const key = element + index;
                return (
                  <option value={year} key={key}>
                    {year}
                  </option>
                );
              })}
          </Select>
          <Select
            placeholder="Select Vehicle Make"
            onChange={onMakeSelect}
            size="sm"
          >
            {/* {Array().fill(MakesArray).map}
            const make = MakesArray.name; return{" "}
            <option value={make}>{make}</option>; */}
          </Select>
          <Input placeholder="Select Vehicle Model" size="sm" />
          <Button
            // isLoading
            colorScheme="blackAlpha"
            variant="outline"
            size="md"
            onClick={onSearchClick}
          >
            Search
          </Button>
        </HStack>
      </div>
    </>
  );
};

export default CarSearch;
