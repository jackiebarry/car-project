import {
  AbsoluteCenter,
  Card,
  CardBody,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import GoHome from "./GoHome";
import { Box, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const Resources = () => {
  return (
    <>
      <div>
        <GoHome path={"/"} />
      </div>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="white" px="4">
          Choosing the right car
        </AbsoluteCenter>
      </Box>
      <Grid gap={6} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
        <GridItem>
          <Card>
            <CardBody>
              <p>
                <a
                  href="https://www.caranddriver.com/research/a31520182/new-vs-used-car/"
                  target="_blank"
                >
                  {" "}
                  New vs Used{" "}
                </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardBody>
              <p>
                <a
                  href="https://www.autotrader.ca/research/subaru/forester/2020/"
                  target="_blank"
                >
                  {" "}
                  Comparing Trim Levels{" "}
                </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            Negotiating the purchase
          </AbsoluteCenter>
        </Box>
        <GridItem>
          <Card>
            <CardBody>
              <p>
                <a
                  href="https://www.consumerreports.org/cars/buying-a-car/beat-four-square-and-other-car-dealership-sales-tactics-a7590220303/"
                  target="_blank"
                >
                  {" "}
                  Dealer Four Square - Sales Technique{" "}
                </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            Maintaining your car
          </AbsoluteCenter>
        </Box>
        <GridItem>
          <Card>
            <CardBody>
              <p>
                <a
                  href="https://www.consumerreports.org/cars/how-to-inspect-a-used-car-a1377126659/"
                  target="_blank"
                >
                  {" "}
                  Expert Tips on Inspecting a Used Car{" "}
                </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </>
  );
};

export default Resources;
