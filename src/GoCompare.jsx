import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const GoCompare = ({ path }) => {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate(path);
  };

  return (
    <Button
      size="lg"
      colorScheme="pink"
      variant="outline"
      onClick={routeChange}
    >
      Start Comparing Now
    </Button>
  );
};

export default GoCompare;
