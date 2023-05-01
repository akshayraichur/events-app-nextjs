import React from "react";
import MainHeader from "./MainHeader";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="Events app - where you come | network | learn" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
