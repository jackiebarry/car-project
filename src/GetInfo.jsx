import { Button } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const GetInfo = ({ path }) => {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate(path);
  };

  return (
    <Button
      leftIcon={<InfoIcon />}
      colorScheme="blackAlpha"
      variant="outline"
      onClick={routeChange}
    >
      Additional Resources
    </Button>
  );
};

export default GetInfo;
