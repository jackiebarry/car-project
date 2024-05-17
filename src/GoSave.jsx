import { Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const GoSave = ({ path }) => {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate(path);
  };

  return (
    <Button
      leftIcon={<StarIcon />}
      colorScheme="blackAlpha"
      variant="outline"
      onClick={routeChange}
    >
      Saved Cars
    </Button>
  );
};

export default GoSave;
