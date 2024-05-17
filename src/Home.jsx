import Car from "./Car";

import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

import carThumbnail from "./images/carThumbnail.png";
import suvThumbnail from "./images/suvThumbnail.png";
import vanThumbnail from "./images/vanThumbnail.png";
import truckThumbnail from "./images/truckThumbnail.png";
import NavBurger from "./NavBurger";

const Home = () => {
  return (
    <>
      <NavBurger />

      <Divider />
      <div className="thumbnails">
        <Card>
          <CardHeader>
            <h1 size="sm"> CAR</h1>
          </CardHeader>
          <CardBody>
            <Car className="thumbnail" imgUrl={carThumbnail} />
          </CardBody>
          <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h1 size="sm"> SUV</h1>
          </CardHeader>
          <CardBody>
            <Car className="thumbnail" imgUrl={suvThumbnail} />
          </CardBody>
          <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h1 size="sm"> TRUCK</h1>
          </CardHeader>
          <CardBody>
            <Car className="thumbnail" imgUrl={truckThumbnail} />
          </CardBody>
          <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h1 size="sm"> CAR</h1>
          </CardHeader>
          <CardBody>
            <Car className="thumbnail" imgUrl={vanThumbnail} />
          </CardBody>
          <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
        </Card>
      </div>
      <div className="title">
        <h1>Car Compare</h1>
      </div>
    </>
  );
};

export default Home;
