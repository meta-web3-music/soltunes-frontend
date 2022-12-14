import type { NextPage } from "next";
import { AddressProvider } from "../src/context/AddressContext";
import Header from "../src/components/header";
import HottestSongs from "../src/components/HottestSongs";

const Home: NextPage = () => {
  return (
    <>
      <AddressProvider>
        <Header />
      </AddressProvider>
      <HottestSongs />
    </>
  );
};

export default Home;
