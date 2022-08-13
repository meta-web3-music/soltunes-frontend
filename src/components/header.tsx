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
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode<string>();

  return (
    <Box as="nav" bgGradient="linear(to-r, #9945FD, #14f195)" color="white">
      <Flex
        alignItems="center"
        justifyContent="center"
        margin="auto"
        py="3"
        px="6"
        flexDirection="row"
      >
        <Box>
          <Heading as="h1">SOLTUNES</Heading>
          <Text fontSize="lg">Stream Music, Advertise</Text>
        </Box>
        <Spacer />
        <Box>
          <Button size="xs" color="black">
            Ad Marketplace
          </Button>
        </Box>
        <Spacer />
        <Box>
          <Button size="sm" color="black">
            Connect Wallet
          </Button>
        </Box>
        {/* <Box onClick={toggleColorMode}>
          {colorMode === "dark" ? <MdLightMode /> : <MdDarkMode />}
        </Box> */}
      </Flex>
    </Box>
  );
};

export default Header;
