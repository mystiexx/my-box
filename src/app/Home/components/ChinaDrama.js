import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

const ChinaDrama = ({ isNotSmallerScreen, chinese, handleMovie }) => {
  return (
    <Box>
      <div
        className={isNotSmallerScreen ? "card-wrapper-desktop" : "card-wrapper"}
      >
        {chinese?.slice(0, 6).map((china) => (
          <Box key={china.id} onClick={() => handleMovie(china)} w="300px">
            <Image
              src={china.imageurl}
              alt={china.imageurl}
              w="100%"
              objectFit="contain"
            />
            <Text fontSize="sm" fontWeight="400" mt={1}>
              {china.title}
            </Text>
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default ChinaDrama;
