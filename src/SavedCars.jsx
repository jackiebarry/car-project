import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Box,
  Divider,
} from "@chakra-ui/react";
import CarDetails from "./CarDetails.jsx";

import GoHome from "./GoHome.jsx";

import foresterBlue from "./images/foresterBlue.jpeg";
import mazdaCX5 from "./images/mazdaCX5.jpeg";
import toyotaRAV4 from "./images/toyotaRAV4.jpeg";

const SavedCars = () => {
  const savedCars = JSON.parse(localStorage.getItem("savedCars")) || [];
  return (
    <>
      <div>
        <GoHome path={"/"} />
      </div>
      <Box position="relative" padding="10">
        <Divider />
      </Box>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {savedCars.map((car, index) => (
          <CarDetails {...car} key={index} />
        ))}
        <Card>
          <CardHeader>
            <Heading size="sm"> 2020 Subaru Forester</Heading>
          </CardHeader>
          <CardBody>
            <img
              src={foresterBlue}
              alt="Blue Subaru Forester SUV in the foreground of an outdoor scene"
              // borderRadius='lg'
            />
            <ul>
              <li>Trim Level: Limited</li>
              <li>$38,195 MSRP</li>
              <li>Standard all-wheel drive</li>
              <li>2.5-liter four-cylinder engine</li>
              <li>Enhanced off-road capability</li>
            </ul>
          </CardBody>
          <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="sm"> 2020 Mazda CX-5</Heading>
          </CardHeader>
          <CardBody>
            <img
              src={mazdaCX5}
              alt="Dark grey Mazda CX-5 SUV in the foreground of a forest"
              // borderRadius='lg'
            />
            <ul>
              <li>Trim Level: GT</li>
              <li>$37,650 MSRP</li>
              <li>All-wheel drive</li>
              <li>2.5-liter four-cylinder engine</li>
              <li>Exceptional handling skills</li>
            </ul>
          </CardBody>
          <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="sm">2020 Toyota RAV4</Heading>
          </CardHeader>
          <CardBody>
            <img
              src={toyotaRAV4}
              alt="Light silver grey Toyota RAV4 SUV in the foreground of the forest"
              // borderRadius='lg'
            />
            <ul>
              <li>Trim Level: XLE</li>
              <li>$33,790 MSRP</li>
              <li>All-wheel drive</li>
              <li>2.5-liter four-cylinder engine</li>
              <li>Abundant cargo space</li>
            </ul>
          </CardBody>
          <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default SavedCars;
