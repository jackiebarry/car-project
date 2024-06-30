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
import { fetchCarImages, fetchCarMakes, fetchCarModels } from "./HandleAPI";

const CarSearch = () => {
  const [year, setYear] = useState(2015);
  const [models, setModels] = useState([]);
  const [makes, setMakes] = useState([]);
  const [make, setMake] = useState("");
  const [model, setModel] = useState(null);
  const [images, setImages] = useState("");
  const [image, setImage] = useState("");

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
      const models = await fetchCarModels(year, make);
      // console.log(typeof models);
      // console.log(models);
      setModels(models);
    };

    getCarModels();
  }, [make]);

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
    const images = await fetchCarImages(selectedModel, year, make);
    setImages(images);
    setImage(image);
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
          >
            {models.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
          </Select>
        </HStack>
        {model && (
          <HStack spacing={3} padding={5}>
            <Card>
              <CardHeader>
                <Heading size="sm">
                  {year} {make} {model}
                </Heading>
              </CardHeader>
              <CardBody>
                <CarImage image={image} />
              </CardBody>
            </Card>
          </HStack>
        )}
      </div>
    </>
  );
};

export default CarSearch;
