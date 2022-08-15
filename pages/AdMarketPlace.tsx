import { AddressProvider } from "../src/context/AddressContext";
import Header from "../src/components/header";
import { Heading } from "@chakra-ui/react";

const AdMarketPlace: React.FC = () => {
  return (
    <>
      <AddressProvider>
        <Header />
      </AddressProvider>
      <Heading>Ad Marketplace</Heading>
    </>
  );
};

export default AdMarketPlace;
