import { Button } from "@chakra-ui/react";
import { TbHeartPlus } from "react-icons/tb";

const SaveCar = ({ car, setSavedCars }) => {
  const saveCar = () => {
    const savedCars = JSON.parse(localStorage.getItem("savedCars")) || [];
    const newCar = { ...car, saved: true };
    savedCars.push(newCar);
    setSavedCars(savedCars);
    localStorage.setItem("savedCars", JSON.stringify(savedCars));
  };

  return (
    <Button
      leftIcon={<TbHeartPlus />}
      colorScheme="blackAlpha"
      variant="outline"
      onClick={saveCar}
    ></Button>
  );
};

export default SaveCar;
