/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider, Box } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import { AppProps } from "next/app";
import "@fontsource/lexend/latin.css";

import createEmotionCache from "styles/createEmotionCache";
import customTheme from "styles/customTheme";
import "styles/globals.css";
import { Menu } from "components/Home/Menu";
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {}

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Menu />
    </ChakraProvider>
  );
};

MyApp.defaultProps = {
  emotionCache: clientSideEmotionCache,
};
export default MyApp;
