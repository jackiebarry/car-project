import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  Heading,
  Divider,
  Flex,
} from "@chakra-ui/react";
import GoHome from "./GoHome.jsx";

const FAQs = () => {
  return (
    <>
      <Flex justify="flex-start" padding="5">
        <div>
          <GoHome path={"/"} />
        </div>
      </Flex>
      <Box position="relative" padding="10">
        <Divider />
      </Box>
      <Grid
        gap={5}
        padding={10}
        // minH="100%"
        templateRows="repeat(auto-fill, minmax(1fr))"
      >
        <GridItem>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <CardHeader width="250px">
              <Heading as="h4" size="md">
                {" "}
                New vs Used
              </Heading>
            </CardHeader>
            <CardBody align="left">
              <p>
                The age old question - to buy new or used? What are the main
                differences? There are pros and cons to both options. At the end
                of the day, buying a vehicle is a very personal decision, and
                most people will have different priorities. Personally, I opted
                for a certified pre-owned car. Buying a car that is a few years
                older (2020) allowed me to get a higher trim level which had all
                the features I wanted (the main one being a heated steering
                wheel).
              </p>
            </CardBody>
            <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <CardHeader width="250px">
              <Heading as="h4" size="md">
                {" "}
                MSRP
              </Heading>
            </CardHeader>
            <CardBody align="left">
              <p>
                MSRP - which stands for Manufacturer's Suggested Retail Price -
                is the price that a manufacturer recommends that stores sell
                their product at. Some retailers may also refer to the MSRP as
                the "list price".
              </p>
            </CardBody>
            <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <CardHeader width="250px">
              <Heading as="h4" size="md">
                {" "}
                Trim
              </Heading>
            </CardHeader>
            <CardBody align="left">
              <p>
                When people talk about the trim level of a vehicle, they are
                referring to the different variations of a vehicle. Almost every
                vehicle comes in several different versions. Each version, or
                trim, offers a variety of features and equipment. Car trims help
                buyers differentiate between models, making them easier to
                identify. If you are looking to buy a car with specific
                features, like heated seats or a heated steering wheel, you'll
                need to keep an eye on what features are offered in the various
                trim levels! Higher trim level = more features = higher price!
              </p>
            </CardBody>
            <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <CardHeader width="250px">
              <Heading as="h4" size="md">
                {" "}
                Warranty{" "}
              </Heading>
            </CardHeader>
            <CardBody align="left">
              <p>
                When purchasing a car through a dealership, warranty will be a
                factor to consider. All new cars will come with factory
                warranties. Most manufacturers also provide warranties for their
                certified pre-owned vehicles. There are two types of
                manufacturers warranties which are normally discussed- new
                vehicle limited warranty and powertrain limited warranty. The
                new vehicle limited warranty, often referred to as a
                bumper-to-bumper warranty, covers the majority of car parts. It
                often lasts for three years or 36,000 miles- however the exact
                length and coverage can vary by manufacturer. The powertrain
                limited warranty usually covers the engine, drivetrain, and
                transmission. It typically lasts five years or 60,000 miles-
                however the exact length and coverage can vary by manufacturer{" "}
              </p>
            </CardBody>
            <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <CardHeader width="250px">
              <Heading as="h4" size="md">
                {" "}
                Mileage{" "}
              </Heading>
            </CardHeader>
            <CardBody align="left">
              <p>
                When purchasing a used vehicle, people will often highlight the
                importance of finding a car with low-mileage. Mileage is
                referring to the number of miles or kilometers a car has been
                driven. But what actually counts as low-mileage for a vehicle?
                The average mileage per year is 24,000 kilometers. In order to
                gauge if the car's mileage is within a reasonable range,
                multiply the car's age by 24,000 and compare it to the mileage
                reading on the odometer. Opting for a vehicle that has a lower
                mileage is a strategy some poeple pick to decrease the amount of
                maintenance work that will be required right away. Another
                factor to consider is where most of the driving occurred-
                highway miles are easier on a vehicle than city-driving.
              </p>
            </CardBody>
            <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <CardHeader width="250px">
              <Heading as="h4" size="md">
                {" "}
                CARFAX Report{" "}
              </Heading>
            </CardHeader>
            <CardBody align="left">
              <p>
                CARFAX Vehicle reports can provide critical details about a
                vehicle's history to allow a buyer to make an informed decision.
                CARFAX reports include details about many things, including
                vehicle damage (accident history, frame or structural damage,
                repair estimates and costs), safety & service (unfixed safety
                recalls, service history, tire rotation, brake replacements, oil
                changes), and other essential information (money owing on the
                vehicle, rental or commercial use, vehicle theft, rebuilt or
                salvage title, odometer readings). All the details provided in a
                CARFAX report can help a buyer determine if they are getting a
                good deal on the purchase of a vehicle- for example, a car that
                has reported accidents and sustained damage as a result should
                be sold for a reduced price.
              </p>
            </CardBody>
            <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <CardHeader width="250px">
              <Heading as="h4" size="md">
                {" "}
                Tires{" "}
              </Heading>
            </CardHeader>
            <CardBody align="left">
              <p>
                One of the most important safety features on a vehicle is its
                tires. Having a good set of tires which are appropriate for the
                season is crucial to safe driving. Despite their name, in many
                locations all-season tires should be called three season tires,
                as they are not a suitable choice for cold winter driving. A big
                benefit to all-seasons is that they stay on all year, which
                decreases the cost associated with having two sets of tires and
                needing to change them twice a year. The major downside to
                all-seasons is they don't have the same cold-weather performance
                that winter tires do.{" "}
              </p>
            </CardBody>
            <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <CardHeader width="250px">
              <Heading as="h4" size="md">
                {" "}
                Rustproofing{" "}
              </Heading>
            </CardHeader>
            <CardBody align="left">
              <p>
                Rustproofing refers to the process of preventing rust on a
                vehicle through the use of specific chemical applications and
                services. In order to achieve the protection against rust or
                corrosion, a barrrier is applied between the vehicle's body and
                the external elements. There are a number of benefits to
                rustproofing a vehicle including extending it's life cycle,
                lowering repair costs, increasing resale value and it has a
                positive environmental impact.{" "}
              </p>
            </CardBody>
            <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </>
  );
};

export default FAQs;
