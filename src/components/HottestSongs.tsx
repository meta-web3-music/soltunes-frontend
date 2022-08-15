import MintModal from "./MindModal";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function HottestSongs() {
  return (
    <Box mx="1rem" my="10">
      <Heading as="h2" size="lg">
        Hottest Songs
      </Heading>
      <Text as="h3" size="sm" my="4">
        Get a chance to place your ads under the hottest songs
      </Text>
      <Box>
        <MintModal />
      </Box>
    </Box>
  );
}
