import { Button } from "@chakra-ui/react";
import { TbHeartPlus } from "react-icons/tb";

// create resubale component for car display
// save relevant data in localstorage on car save
// load saved cars in saved cars page

const SaveCar = (car) => {
  const saveCar = () => {
    const savedCars = JSON.parse(localStorage.getItem("savedCars")) || [];
    savedCars.push(car.car);
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
