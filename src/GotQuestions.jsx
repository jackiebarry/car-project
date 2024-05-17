import { Button } from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const GotQuestions = ({ path }) => {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate(path);
  };

  return (
    <Button
      leftIcon={<QuestionIcon />}
      colorScheme="blackAlpha"
      variant="outline"
      onClick={routeChange}
    >
      Frequently Asked Questions
    </Button>
  );
};

export default GotQuestions;
