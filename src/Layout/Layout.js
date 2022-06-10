import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Box } from "@chakra-ui/react";
const Layout = (props) => {
  return (
    <Box display="flex" flexDirection="column">
      <Navbar />
      {props.children}
    </Box>
  );
};

export default Layout;
