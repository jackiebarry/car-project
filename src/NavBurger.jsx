import React from "react";

import GoSave from "./GoSave";
import GotQuestions from "./GotQuestions";
import GetInfo from "./GetInfo";
import GoCompare from "./GoCompare";

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
          <DrawerBody>
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
                <Box>
                  <GoCompare path={"./CarCompare"} />
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
