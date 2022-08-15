import React, { useEffect, useContext } from "react";
import { AddressContext } from "../context/AddressContext";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  useColorMode,
  HStack,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { MdLightMode, MdDarkMode, MdCircle } from "react-icons/md";

const Header = () => {
  const { walletAddress, setWalletAddress } =
    useContext<string>(AddressContext);
  const { colorMode, toggleColorMode } = useColorMode<any>();

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log("Phantom wallet found!");
          /*
           * The solana object gives us a function that will allow us to connect
           * directly with the user's wallet!
           */
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            "Connected with Public Key:",
            response.publicKey.toString()
          );
        }
      } else {
        alert("Solana object not found! Get a Phantom Wallet 👻");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log("Connected with Public Key:", response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  const renderNotConnectedContainer = () => (
    <Button size="sm" onClick={connectWallet}>
      <img
        src="./solana-sol-logo.svg"
        style={{ height: "1.25em", width: "1.25em", marginRight: "7px" }}
      />
      <span>Connect Wallet</span>
    </Button>
  );

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <Box as="nav" bgGradient="linear(to-r, #9945FD, #14f195)" color="white">
      <Flex
        alignItems="center"
        justifyContent="center"
        margin="auto"
        p="1rem"
        flexDirection="row"
      >
        <Box>
          <Heading as="h1">SOLTUNES</Heading>
          <Text fontSize="lg">Stream Music, Support Artists</Text>
        </Box>
        <Spacer />
        <Box>
          <Button size="sm" color="black">
            Ad Marketplace
          </Button>
        </Box>
        <Spacer />
        {!walletAddress ? (
          <Box color="black">{renderNotConnectedContainer()}</Box>
        ) : (
          <Box
            bg="gray.200"
            color="black"
            pr="2"
            pl="1.5"
            py="1"
            borderRadius="full"
            borderWidth="1px"
            borderColor="gray.400"
          >
            <HStack>
              <MdCircle
                style={{
                  color: "#39ff14",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
              <span>
                {walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}
              </span>
            </HStack>
          </Box>
        )}
        {/* <Box onClick={toggleColorMode}>
          {colorMode === "dark" ? <MdLightMode /> : <MdDarkMode />}
        </Box> */}
      </Flex>
    </Box>
  );
};

export default Header;
