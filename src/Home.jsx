import Car from "./Car";

import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Box, Divider, Grid, GridItem, Heading } from "@chakra-ui/react";

import carThumbnail from "./images/carThumbnail.png";
import suvThumbnail from "./images/suvThumbnail.png";
import vanThumbnail from "./images/vanThumbnail.png";
import truckThumbnail from "./images/truckThumbnail.png";
import NavBurger from "./NavBurger";

const Home = () => {
  return (
    <>
      <Box>
        <div className="title" padding="10">
          <Heading>Car Compare</Heading>
        </div>
      </Box>
      <NavBurger />

      <Box position="relative" padding="10">
        <Divider />
      </Box>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem>
          <Card>
            <CardHeader>
              <Heading size="sm"> CAR</Heading>
            </CardHeader>
            <CardBody>
              <Car className="thumbnail" imgUrl={carThumbnail} />
            </CardBody>
            <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardHeader>
              <Heading size="sm"> SUV</Heading>
            </CardHeader>
            <CardBody>
              <Car className="thumbnail" imgUrl={suvThumbnail} />
            </CardBody>
            <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardHeader>
              <Heading size="sm"> TRUCK</Heading>
            </CardHeader>
            <CardBody>
              <Car className="thumbnail" imgUrl={truckThumbnail} />
            </CardBody>
            <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardHeader>
              <Heading size="sm"> CAR</Heading>
            </CardHeader>
            <CardBody>
              <Car className="thumbnail" imgUrl={vanThumbnail} />
            </CardBody>
            <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
