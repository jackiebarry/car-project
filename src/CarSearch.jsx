import { Input, HStack, Button, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { fetchCarMakes, fetchCarModels } from "./HandleAPI";

const CarSearch = () => {
  const [year, setYear] = useState(2015);
  const [models, setModels] = useState([]);
  const [makes, setMakes] = useState([]);
  const [make, setMake] = useState("");

  useEffect(() => {
    const getCarMakes = async () => {
      const makes = await fetchCarMakes(year);
      setMakes(makes);
    };

    getCarMakes();
  }, [year]);

  useEffect(() => {
    const getCarModels = async () => {
      const models = await fetchCarModels(year, make);
      setModels(models);
    };

    getCarModels();
  }, [year, make]);

  // console.log(models);
  // console.log(make);

  const onYearSelect = async (event) => {
    const selectedYear = event.target.value;
    setYear(selectedYear);
    // const models = await fetchCarMakes(selectedYear);
    // setModels(models);
  };

  const onMakeSelect = async (event) => {
    const selectedMake = event.target.value;
    setMake(selectedMake);
    console.log(selectedMake);
    const models = await fetchCarModels(selectedMake, year);
    setModels(models);
    console.log(models);
  };

  const onModelSelect = async (event) => {
    const selectedModel = event.target.value;
    setModels(selectedModel);
    console.log(selectedModel);
    const models = await fetchCarModels(selectedMake, year);
    setModels(models);
    console.log(models);
  };

  const onSearchClick = () => {
    alert(year, makes);
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
            {makes.map((make, index) => (
              <option key={index} value={make}>
                {make}
              </option>
            ))}
          </Select>
          <Select
            placeholder="Select Vehicle Model"
            onChange={onModelSelect}
            size="sm"
          >
            {models.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
          </Select>
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
