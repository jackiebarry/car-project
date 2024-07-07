import {
  Card,
  CardBody,
  HStack,
  Select,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import CarImage from "./CarImage";
import { useState, useEffect } from "react";
import {
  fetchCarImages,
  fetchCarMakes,
  fetchCarModels,
  fetchCarTrims,
} from "./HandleAPI";
import CarLoading from "./CarLoading";
import carThumbnail from "./images/carThumbnail.png";

import carLoading from "./images/carLoading.gif";

const backupImageUrl = carThumbnail; // Replace with the actual path to your backup image

const CarSearch = () => {
  const [year, setYear] = useState(2015);
  const [models, setModels] = useState([]);
  const [makes, setMakes] = useState([]);
  const [make, setMake] = useState("");
  const [model, setModel] = useState(null);
  const [trims, setTrims] = useState([]);
  const [trim, setTrim] = useState(null);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

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
    const selectedYear = event.target.value;
    setYear(selectedYear);
  };

  const onMakeSelect = async (event) => {
    const selectedMake = event.target.value;
    setMake(selectedMake);
    // console.log(selectedMake);
    const models = await fetchCarModels(selectedMake, year);
    setModels(models);
    // console.log(models);
  };

  const onModelSelect = async (event) => {
    const selectedModel = event.target.value;
    setModel(selectedModel);
  };

  const onTrimSelect = async (event) => {
    setLoading(true); // Show the loading GIF
    const selectedTrim = event.target.value;
    setTrim(selectedTrim);
    setImage(await fetchCarTrims(year, make, model, selectedTrim));
    setLoading(false); // Hide the loading GIF
    console.log(image);
  };

  return (
    <>
      <div>
        <HStack spacing={3}>
          <Select
            placeholder="Select Vehicle Year"
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
            placeholder="Select Vehicle Make"
            onChange={onMakeSelect}
            size="lg"
            color="#ED64A6"
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
            placeholder="Select Vehicle Trim Level"
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
        {trim && (
          <HStack spacing={3} padding={5}>
            <Card>
              <CardHeader>
                <Heading size="sm">
                  {year} {make} {model} {trim}
                </Heading>
              </CardHeader>
              <CardBody>
                {loading && <CarLoading gifUrl={carLoading} />}
                {!loading && (
                  <CarImage imageUrl={image} backupImageUrl={backupImageUrl} />
                )}
              </CardBody>
            </Card>
          </HStack>
        )}
      </div>
    </>
  );
};

export default CarSearch;
