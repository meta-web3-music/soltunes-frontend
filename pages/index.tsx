import type { NextPage } from "next";
import { AddressProvider } from "../src/context/AddressContext";
import Header from "../src/components/header";
// import { Button } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <AddressProvider>
        <Header />
      </AddressProvider>
    </>
  );
};

export default Home;
