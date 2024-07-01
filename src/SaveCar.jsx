import { Button } from "@chakra-ui/react";
import { TbHeartPlus } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SaveCar = ({ path }) => {
  let navigate = useNavigate();

  const saveCar = () => {
    navigate(path);
  };

  return (
    <Button
      leftIcon={<TbHeartPlus />}
      colorScheme="whiteAlpha"
      variant="outline"
      onClick={saveCar}
    >
      Home
    </Button>
  );
};

export default SaveCar;
