import { HStack, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {
  fetchCarImages,
  fetchCarMakes,
  fetchCarModels,
  fetchCarTrims,
} from "./HandleAPI.jsx";

import CarDetails from "./CarDetails.jsx";

const CarSearch = () => {
  const [year, setYear] = useState(2015);
  const [models, setModels] = useState([]);
  const [makes, setMakes] = useState([]);
  const [make, setMake] = useState(null);
  const [model, setModel] = useState(null);
  const [trims, setTrims] = useState([]);
  const [trim, setTrim] = useState(null);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const allFieldsFilledOut = !!trim;

  useEffect(() => {
    const getCarMakes = async () => {
      const makes = await fetchCarMakes(year);
      // console.log(typeof make);
      // console.log(make);
      setMakes(makes);
    };

    getCarMakes();
  }, [year]);

  useEffect(() => {
    const getCarModels = async () => {
      const models = await fetchCarModels(make, year);
      // console.log(typeof models);
      // console.log(models);
      setModels(models);
    };

    getCarModels();
  }, [make]);

  useEffect(() => {
    const getCarTrims = async () => {
      const trims = await fetchCarTrims(year, make, model);
      // console.log(typeof models);
      // console.log(models);
      setTrims(trims);
    };

    getCarTrims();
  }, [model]);

  const onYearSelect = async (event) => {
    if (allFieldsFilledOut) {
      setMake(null);
      setMakes([]);
      setModel(null);
      setModels([]);
      setTrim(null);
      setTrims([]);
    }
    const selectedYear = event.target.value;
    setYear(selectedYear);
  };

  const onMakeSelect = async (event) => {
    if (allFieldsFilledOut) {
      setModel(null);
      setModels([]);
      setTrim(null);
      setTrims([]);
    }
    const selectedMake = event.target.value;
    setMake(selectedMake);
    // console.log(selectedMake);
    const models = await fetchCarModels(selectedMake, year);
    setModels(models);
    // console.log(models);
  };

  const onModelSelect = async (event) => {
    if (allFieldsFilledOut) {
      setTrim(null);
      setTrims([]);
    }
    const selectedModel = event.target.value;
    setModel(selectedModel);
  };

  const onTrimSelect = async (event) => {
    setLoading(true); // Show the loading GIF
    const selectedTrim = event.target.value;
    setTrim(selectedTrim);
    setImage(await fetchCarImages(year, make, model, selectedTrim));
    setLoading(false); // Hide the loading GIF
    console.log(image);
  };

  const carDetails = { year, make, model, trim, loading, image };
  console.log(make);

  return (
    <>
      <div>
        <HStack spacing={3}>
          <Select
            placeholder="Year"
            onChange={onYearSelect}
            size="lg"
            color="#ED64A6"
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
            placeholder="Make"
            onChange={onMakeSelect}
            size="lg"
            color="#ED64A6"
          >
            {makes.map((theMake, index) => (
              <option key={index} value={theMake}>
                {theMake}
              </option>
            ))}
          </Select>
          <Select
            placeholder="Model"
            onChange={onModelSelect}
            size="lg"
            color="#ED64A6"
          >
            {models.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
          </Select>
          <Select
            placeholder="Trim Level"
            onChange={onTrimSelect}
            size="lg"
            color="#ED64A6"
          >
            {trims.map((trim, index) => (
              <option key={index} value={trim}>
                {trim}
              </option>
            ))}
          </Select>
        </HStack>
        <HStack spacing={3} padding={5}>
          <CarDetails {...carDetails} />
        </HStack>
      </div>
    </>
  );
};

export default CarSearch;
