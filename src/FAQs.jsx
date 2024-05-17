import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
} from "@chakra-ui/react";
import GoHome from "./GoHome";
import { Divider } from "@chakra-ui/react";

const FAQs = () => {
  return (
    <>
      <div>
        <GoHome path={"/"} />
      </div>
      <Divider />
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <Card>
          <CardHeader>
            <h1 size="sm"> New vs Used</h1>
          </CardHeader>
          <CardBody>
            <p>
              The age old question - to buy new or used? What are the main
              differences?
              <br />
              Buying a vehicle is a very personal decision, and most people will
              have different priorities. Personally, I opted for a certified
              pre-owned car. Buying a car that is a few years older (2020)
              allowed me to get a higher trim level which had all the features I
              wanted (the main one being a heated steering wheel). <br />
              {/* <a href="investopedia.com/articles/pf/07/neworusedcar.asp"> More information here </a> */}
            </p>
          </CardBody>
          <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h1 size="sm"> MSRP</h1>
          </CardHeader>
          <CardBody>
            <p>
              MSRP - which stands for Manufacturer's Suggested Retail Price - is
              the price that a manufacturer recommends that stores sell their
              product at. Some retailers may also refer to the MSRP as the "list
              price"
            </p>
          </CardBody>
          <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h1 size="sm"> Trim</h1>
          </CardHeader>
          <CardBody>
            <p>
              When people talk reference the trim level of a vehicle, they are
              referncing the different variations of a vehicle that exists.
              Almost every vehicle comes in several different versions. Each
              version, or trim, offers a variety of features and equipment. Car
              trims help buyers differentiate between models, making them easier
              to identify. If you are looking to buy a car with specific
              features, like heated seats or a heated steering wheel, you'll
              need to keep an eye on what features are offered in the various
              trim levels!
            </p>
          </CardBody>
          <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default FAQs;
