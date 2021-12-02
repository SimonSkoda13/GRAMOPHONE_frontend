/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider, Box } from "@chakra-ui/react";
import { AppProps } from "next/app";
import "@fontsource/lexend/latin.css";

import { Menu } from "components/Layout/Menu";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Layout } from "components/Layout/Layout";
interface MyAppProps extends AppProps {}

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  return (
    <ChakraProvider>
      <Layout title="Home"></Layout>
    </ChakraProvider>
  );
};

export default MyApp;
