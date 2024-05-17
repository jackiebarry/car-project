import { Card, CardBody, SimpleGrid } from "@chakra-ui/react";
import GoHome from "./GoHome";
import { Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const Resources = () => {
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
          <CardBody>
            <p>
              <a href="investopedia.com/articles/pf/07/neworusedcar.asp/">
                {" "}
                New vs Used{" "}
              </a>
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <p>
              <a href="https://www.autotrader.ca/research/subaru/forester/2020/">
                {" "}
                Comparing Trim Levels{" "}
              </a>
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <p>
              <a href="https://www.consumerreports.org/cars/buying-a-car/beat-four-square-and-other-car-dealership-sales-tactics-a7590220303/">
                {" "}
                Dealer Four Square - Sales Technique{" "}
              </a>
            </p>
          </CardBody>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default Resources;
