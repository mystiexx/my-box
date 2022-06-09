import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

const KoreanDrama = ({ isNotSmallerScreen, korean, handleMovie }) => {
  return (
    <Box>
      <div
        className={isNotSmallerScreen ? "card-wrapper-desktop" : "card-wrapper"}
      >
        {korean?.slice(0, 6).map((korea) => (
          <Box
            key={korea.id}
            className="china-box"
            onClick={() => handleMovie(korea)}
            w="300px"
          >
            <Image
              src={korea.imageurl}
              alt={korea.imageurl}
              w="100%"
              objectFit="center"
            />
            <Text fontSize="sm" fontWeight="400" mt={1}>
              {korea.title}
            </Text>
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default KoreanDrama;
