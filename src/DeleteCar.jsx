import { Button } from "@chakra-ui/react";
import { TbHeartMinus } from "react-icons/tb";

// year, make, model, trim

const DeleteCar = ({ car, setSavedCars }) => {
  const removeCar = () => {
    const savedCars = JSON.parse(localStorage.getItem("savedCars")) || [];
    const updatedCars = savedCars.filter(
      (localStorageCar) =>
        localStorageCar.year !== car.year &&
        localStorageCar.make != car.make &&
        localStorageCar.model != car.model &&
        localStorageCar.trim != car.trim
    );
    setSavedCars(updatedCars);
    localStorage.setItem("savedCars", JSON.stringify(updatedCars));
  };

  return (
    <Button
      leftIcon={<TbHeartMinus />}
      colorScheme="blackAlpha"
      variant="outline"
      onClick={removeCar}
    ></Button>
  );
};

export default DeleteCar;
