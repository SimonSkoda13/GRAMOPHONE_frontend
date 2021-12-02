import { Box, Flex, SimpleGrid, Spacer, Text } from "@chakra-ui/layout";
import React, { ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBell,
  faHome,
  faPlus,
  faSearch,
  faUser,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { colors } from "components/Shared/Colors/Colors";
import { IconBase } from "react-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { ResponsiveValue } from "@chakra-ui/react";
import { AppLink } from "./AppLink";

export interface MenuProps {}

export const Menu = (props: MenuProps) => {
  const iconsBase: IconDefinition[] = [faUser, faSearch];
  const iconsMd: IconDefinition[] = [faSearch, faHome, faPlus, faBell, faUser];

  return (
    <>
      <header>
        <AppLink href="/" label="Next.js" />
      </header>
    </>
  );
};
