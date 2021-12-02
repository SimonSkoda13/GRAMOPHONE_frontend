import Head from "next/head";
import {} from "@chakra-ui/react";
import React from "react";
import { Menu } from "./Menu";
import Footer from "./Footer";

interface LayoutProps {
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Menu />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
