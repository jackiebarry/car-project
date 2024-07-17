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
import DeleteCar from "./DeleteCar.jsx";

function CarDetails({ car, setSavedCars }) {
  const { year, make, model, trim, loading, image, details, saved } = car;
  return (
    trim && (
      <Card>
        <CardHeader>
          <Heading size="sm">
            {year} {make} {model}
          </Heading>
        </CardHeader>
        <CardBody>
          <div className="car-image">
            {loading && <CarLoading gifUrl={carLoading} />}
            {!loading && (
              <CarImage imageUrl={image} backupImageUrl={carThumbnail} />
            )}
          </div>
          <div className="car-overview">
            <p>Trim level: {trim}</p>
            <p>Description: {details.description}</p>
            <p>MSRP: ${details.msrp}</p>
          </div>
        </CardBody>
        <CardFooter>
          {!saved && <SaveCar car={car} setSavedCars={setSavedCars} />}
          {saved && <DeleteCar car={car} setSavedCars={setSavedCars} />}
        </CardFooter>
      </Card>
    )
  );
}

export default CarDetails;
