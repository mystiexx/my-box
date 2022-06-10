import React from "react";
import {
  Box,
  Center,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ handleSearch }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      mt={5}
    >
      {" "}
      <Center w={isNotSmallerScreen ? "40%" : "auto"}>
        <InputGroup>
          <Input placeholder="Search.." onChange={handleSearch} />
          <InputRightElement children={<AiOutlineSearch />} />
        </InputGroup>
      </Center>
    </Box>
  );
};

export default SearchBar;
