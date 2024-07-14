import Logo from "./Logo.jsx";

import { Card, CardBody, Box, Divider, Flex } from "@chakra-ui/react";

import autoAllyThumbnail from "./images/autoAllyThumbnail.png";
import JackieSubaru from "./images/JackieSubaru.png";

import NavBurger from "./NavBurger.jsx";
import Thumbnail from "./Thumbnail.jsx";

const Home = () => {
  return (
    <>
      <Flex justify="flex-start" padding="5">
        <NavBurger />
      </Flex>

      <Box position="relative" padding="5">
        <Divider />
      </Box>
      <Box padding="10" align="center">
        <div className="title">
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
        <Flex direction="row" align="center" justify="center" wrap="nowrap">
          <Box flexShrink={0} marginRight={4} padding={5}>
            <Thumbnail
              imgUrl={JackieSubaru}
              width={250}
              height={250}
              alt="Jackie standing in front of her newly purchased blue Subaru Forester"
            />
          </Box>
          <CardBody align="left">
            <p>
              Hi! My name is Jackie and this project is one I developed after my
              own experiences buying a used vehicle! In March of 2024, I took my
              2011 Ford Escape into the garage and recieved the unfortunate news
              that a replacement vehicle was something I should consider sooner
              than later! So began my journey into buying a new (to me) vehicle!
              <br /> <br />
              There is so much to take into consideration when buying a car and
              trying to sort through all of the information online can be
              overwhelming! Luckily for me, my dad and brother know a fair
              amount about vehicles and were my go-tos for questions and advice!
              The experience did make me realize how much there is to know, and
              that a platform which highlights some key factors to take into
              consideration would have been helpful to have! <br />
              <br />
              Hence the rationale for building this site- it is designed to be a
              source for useful information to know when entering into the land
              of buying a used car. I am hoping it will make the overall process
              feel a little less overwhelming so that people can feel confident
              and knowledgeable when dealing with dealerships or private
              sellers!
            </p>
          </CardBody>
        </Flex>
      </Card>
    </>
  );
};

export default Home;
