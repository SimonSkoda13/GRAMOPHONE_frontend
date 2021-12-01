import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export interface MenuProps {}

export const Menu = (props: MenuProps) => {
  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      w={{ base: "100%", md: "70px" }}
      height={{ base: "70px", md: "100vh" }}
      backgroundColor="#212121"
    >
      <FontAwesomeIcon icon={faAngleRight} />
    </Box>
  );
};
