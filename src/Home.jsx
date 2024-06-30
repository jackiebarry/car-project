import Logo from "./Logo";

import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";

import { Box, Divider } from "@chakra-ui/react";

import autoAllyThumbnail from "./images/autoAllyThumbnail.png";
import NavBurger from "./NavBurger";

const Home = () => {
  return (
    <>
      <NavBurger />

      <Box position="relative" padding="5">
        <Divider />
      </Box>
      <Box>
        <div className="title" padding="10" align="center">
          <Logo imgUrl={autoAllyThumbnail} />
        </div>
      </Box>
      <Box position="relative" padding="5">
        <Divider />
      </Box>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="filled"
        background="#81E6D9"
        color="black"
      >
        <CardBody>
          <p align="left">
            Hi! My name is Jackie and this project is one I developed after my
            own experiences buying a used vehicle! In March of 2024, I took my
            2011 Ford Escape into the garage and recieved the unfortunate news
            that a replacement vehicle was something I should consider sooner
            than later! So began my journey into buying a new (to me) vehicle!
            There is so much to take into consideration when buying a car and
            trying to sort through all of the information online can be
            overwhelming! Luckily for me, my dad and brother know a fair amount
            about vehicles and were my go-tos for questions and advice! The
            experience did make me realize how much there is to know, and that a
            platform which highlights some key factors to take into
            consideration would have been helpful to have! Hence the rationale
            for building this site- it is designed to be a source for useful
            information to know when entering into the land of buying a used
            car. I am hoping it will make the overall process feel a little less
            overwhelming so that people can feel confident and knowledgeable
            when dealing with dealerships or private sellers!
          </p>
        </CardBody>
        {/* <CardFooter>
          <p align="left">
            personal contact info here - ie linkedIn, github, email etc
          </p>
        </CardFooter> */}
      </Card>
    </>
  );
};

export default Home;
