import { Button } from "@chakra-ui/react";
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const GoHome = ({ path }) => {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate(path);
  };
  return (
    <Button
      leftIcon={<IoHomeOutline />}
      colorScheme="whiteAlpha"
      variant="outline"
      onClick={routeChange}
    >
      Home
    </Button>
  );
};

export default GoHome;
