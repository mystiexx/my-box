import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import "./style.css";

const DramaList = ({ isNotSmallerScreen, movie, handleMovie }) => {
  return (
    <Box>
      <div className="card-wrapper">
        {movie?.slice(0, 6).map((movie) => (
          <Box
            key={movie.id}
            className="china-box"
            onClick={() => handleMovie(movie)}
            w="300px"
          >
            <Image
              src={movie.imageurl}
              alt={movie.imageurl}
              w="100%"
              objectFit="center"
            />
            <Text fontSize="sm" fontWeight="400" mt={1}>
              {movie.title}
            </Text>
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default DramaList;
