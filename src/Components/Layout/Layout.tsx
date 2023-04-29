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
        <title>Next Events App</title>
      </Head>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
