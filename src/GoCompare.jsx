import { Button } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const GoCompare = ({ path }) => {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate(path);
  };

  return (
    <Button
      leftIcon={<ViewIcon />}
      colorScheme="blackAlpha"
      variant="outline"
      onClick={routeChange}
    >
      Compare Cars
    </Button>
  );
};

export default GoCompare;
