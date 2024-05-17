import React from "react";

import GoSave from "./GoSave";
import GotQuestions from "./GotQuestions";
import GetInfo from "./GetInfo";
import GoCompare from "./GoCompare";

import { HamburgerIcon } from "@chakra-ui/icons";

import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
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
              <GoSave path={"./SavedCars"} />
              <GotQuestions path={"./FAQs"} />
              <GetInfo path={"./Resources"} />
              <GoCompare path={"./CarCompare"} />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavBurger;
