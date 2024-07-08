import { Button } from "@chakra-ui/react";
import { TbHeartPlus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const SaveCar = ({ path }) => {
  let navigate = useNavigate();

  const saveCar = () => {
    navigate(path);
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
