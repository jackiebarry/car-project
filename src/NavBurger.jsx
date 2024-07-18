import React from "react";

import GoSave from "./GoSave.jsx";
import GotQuestions from "./GotQuestions.jsx";
import GetInfo from "./GetInfo.jsx";

import { HamburgerIcon } from "@chakra-ui/icons";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

function NavBurger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  return (
    <>
      <IconButton
        colorScheme="alphaWhite"
        onClick={onOpen}
        icon={<HamburgerIcon />}
      >
        Open
      </IconButton>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody mt={50}>
            <div className="navButtons">
              <Stack spacing="24px">
                <Box>
                  <GoSave path={"./SavedCars"} />
                </Box>
                <Box>
                  <GotQuestions path={"./FAQs"} />
                </Box>
                <Box>
                  <GetInfo path={"./Resources"} />
                </Box>
              </Stack>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavBurger;
