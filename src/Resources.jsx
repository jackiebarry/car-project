import {
  AbsoluteCenter,
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import GoHome from "./GoHome";
import { Box, Divider } from "@chakra-ui/react";
import React from "react";

const NavigateLocHref = ({ url, linkTitle }) => {
  // ok to use window back
  const navigate = () => (window.location.href = url);
  return <Button onClick={navigate}>{linkTitle}</Button>;
};

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
      <Grid gap={4} templateColumns="repeat(auto-fill, minmax(500px, 1fr))">
        <GridItem>
          <NavigateLocHref
            url="https://www.caranddriver.com/research/a31520182/new-vs-used-car/"
            linkTitle="New vs Used"
          />
        </GridItem>
        <GridItem>
          <NavigateLocHref
            url="https://www.autotrader.ca/research/subaru/forester/2020/"
            linkTitle="Comparing Trim Levels"
          />
        </GridItem>
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            Negotiating the purchase
          </AbsoluteCenter>
        </Box>
        <GridItem>
          <NavigateLocHref
            url="https://www.consumerreports.org/cars/buying-a-car/beat-four-square-and-other-car-dealership-sales-tactics-a7590220303/"
            linkTitle="Dealer Four Square - Sales Technique"
          />
        </GridItem>
        <GridItem>
          <NavigateLocHref
            url="https://www.youtube.com/watch?v=zUcdKXXAXi8"
            linkTitle="How NOT to negotiate a car deal - 5 things not to do"
          />
        </GridItem>
        <GridItem>
          <NavigateLocHref
            url="https://www.autotrader.ca/editorial/20190513/how-to-negotiate-at-the-dealership-like-a-pro/?gad_source=1&gclid=CjwKCAjwx-CyBhAqEiwAeOcTdci8Awjm5Y6-VsCRpoqiS2AiKYlIjb07bp2JsFX8iWef_3pDrNgfIhoCCgAQAvD_BwE"
            linkTitle="How to Negotiate at the Dealership Like a Pro"
          />
        </GridItem>
        <GridItem>
          <NavigateLocHref
            url="https://www.consumerreports.org/cars/car-pricing-negotiation/how-to-negotiate-a-new-car-price-effectively-a8596856299/"
            linkTitle="How to Negotiate a New-Car Price Effectively"
          />
        </GridItem>
        <GridItem>
          <NavigateLocHref
            url="https://www.carfax.ca/resource-centre/articles/how-to-negotiate-your-used-vehicle-purchase"
            linkTitle="12 Tips to Negotiate a Used Car’s Price"
          />
        </GridItem>
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            Maintaining your car
          </AbsoluteCenter>
        </Box>
        <GridItem>
          <NavigateLocHref
            url="https://www.consumerreports.org/cars/how-to-inspect-a-used-car-a1377126659/"
            linkTitle="Expert Tips on Inspecting a Used Car"
          />
        </GridItem>
        <GridItem>
          <NavigateLocHref
            url="https://www.youtube.com/watch?v=25-HG471MIc"
            linkTitle="A Mechanics Guide To Maintaining Your Car"
          />
        </GridItem>
        <GridItem>
          <NavigateLocHref
            url="https://www.youtube.com/watch?v=Y3jcQCdeJAs"
            linkTitle="How To Make Your Car Last A Long Time - Simple Checks"
          />
        </GridItem>
        <GridItem>
          <NavigateLocHref
            url="https://www.youtube.com/watch?v=brofphmC7GI"
            linkTitle="How to PERFECTLY Maintain your First Car"
          />
        </GridItem>
        <GridItem>
          <NavigateLocHref
            url="https://www.youtube.com/watch?v=GaKKSFEsAdI"
            linkTitle="Simple Car Maintenance to Prevent Expensive Repairs"
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default Resources;
