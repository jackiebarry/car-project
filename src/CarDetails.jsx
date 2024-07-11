import carLoading from "./images/carLoading.gif";
import carThumbnail from "./images/carThumbnail.png";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  CardFooter,
} from "@chakra-ui/react";
import CarImage from "./CarImage.jsx";

import CarLoading from "./CarLoading.jsx";

import SaveCar from "./SaveCar.jsx";

function CarDetails(car) {
  const { year, make, model, trim, loading, image } = car;
  return (
    trim && (
        <Card>
          <CardHeader>
            <Heading size="sm">
              {year} {make} {model} {trim}
            </Heading>
          </CardHeader>
          <CardBody>
            {loading && <CarLoading gifUrl={carLoading} />}
            {!loading && (
              <CarImage imageUrl={image} backupImageUrl={carThumbnail} />
            )}
          </CardBody>
          <CardFooter>
            <SaveCar car={car} />
          </CardFooter>
        </Card>
    )
  );
}

export default CarDetails;
