import { extendTheme } from "@chakra-ui/react";
import "@fontsource/raleway/700.css";
import "@fontsource/open-sans/400.css";

const theme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
});

module.exports = { theme };
