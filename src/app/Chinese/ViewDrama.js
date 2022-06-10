import React from "react";
import { Box, Image, Text, Center, IconButton, Tag } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";

const ViewDrama = ({ movie, toggle }) => {
  return (
    <Box h="100vh" overflowY="scroll">
      <Box p={3}>
        <IconButton
          icon={<AiOutlineClose size={20} />}
          background="transparent"
          onClick={toggle}
          _hover={{
            background: "transparent",
          }}
        />

        <Center>
          <Image
            src={movie.imageurl}
            alt={movie.imageurl}
            boxSize="350px"
            objectFit="contain"
          />
        </Center>
        <Text textAlign="center" mt={2} mb={2}>
          {movie.title}
        </Text>
        <Text textTransform="capitalize" mb={2}>
          Country: {movie.country}
        </Text>
        <Text mb={2}>
          <Box display="flex">
            Genre:
            {movie?.genre?.map((genre) => (
              <Tag
                key={genre}
                className="tag"
                backgroundColor="yellow.400"
                marginLeft="10px"
                textTransform="capitalize"
              >
                {genre}
              </Tag>
            ))}
          </Box>
        </Text>
        <a
          href={`${movie.downloadurl}`}
          target={"_blank"}
          rel="noreferrer noopener"
        >
          Download
        </a>
        <Text mt={2}>Review:</Text>
        <Text mb={2}>{movie.review}</Text>
      </Box>
    </Box>
  );
};

export default ViewDrama;
