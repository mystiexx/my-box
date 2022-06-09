import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { Box, Container, Grid, Text, Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import ChinaDrama from "./components/ChinaDrama";
import "./style.css";
import { Link } from "react-router-dom";
import KoreanDrama from "./components/KoreanDrama";
import Modal from "../../components/modal/Modal";
import ViewDrama from "../Chinese/ViewDrama";

const Home = () => {
  
  const [chinese, setChinese] = useState(null);
  const [korean, setKorean] = useState(null);
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  const [movie, setMovie] = useState({});
  const [open, setOpen] = useState(false);

 

  useEffect(() => {
    const movie = JSON.parse(localStorage.getItem("movies"));
    if (movie) {
      const chinese = movie.filter((item) => item.country === "chinese");
      setChinese(chinese);
      const korean = movie.filter((item) => item.country === "korean");
      setKorean(korean);
    }
  }, []);

  const handleMovie = (movie) => {
    setMovie(movie);
    setOpen(!open);
  };

  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <Layout>
      <Modal Open={open} toggle={toggle}>
        <ViewDrama movie={movie} toggle={toggle} />
      </Modal>
      <Box h={isNotSmallerScreen ? "100vh" : "70vh"}>
        {chinese?.slice(0, 1)?.map((movie) => (
          <Grid
            templateColumns={
              isNotSmallerScreen ? "repeat(2,1fr)" : "repeat(1,1fr)"
            }
            gap={2}
            key={movie.id}
          >
            <Box>
              <Container maxW="container.xl">
                <Box
                  backdropFilter={isNotSmallerScreen ? "auto" : "auto"}
                  backdropBlur={isNotSmallerScreen ? "0px" : "10px"}
                  marginLeft={isNotSmallerScreen ? "120px" : "10px"}
                  marginTop={isNotSmallerScreen ? "180px" : "100px"}
                  p={isNotSmallerScreen ? "0" : "10px"}
                >
                  <Text
                    fontSize={isNotSmallerScreen ? "7xl" : "lg"}
                    color="yellow.400"
                  >
                    {movie.title}
                  </Text>
                  <Text fontSize="md" fontWeight="500">
                    {movie.review.slice(0, 300)}...
                  </Text>
                </Box>
              </Container>
            </Box>

            {isNotSmallerScreen ? (
              <Box zIndex="-2" display={isNotSmallerScreen ? "block" : "none"}>
                <Image
                  src={movie.imageurl}
                  alt={movie.imageurl}
                  position="absolute"
                  top="5%"
                  right="10%"
                  boxShadow="base"
                />
              </Box>
            ) : (
              <Box
                position="absolute"
                zIndex="-2"
                top="0"
                w="auto"
                display={isNotSmallerScreen ? "none" : "block"}
              >
                <Image
                  src={movie.imageurl}
                  alt={movie.imageurl}
                  position="relative"
                  top="5%"
                  right="0"
                  filter="auto"
                  blur="1px"
                />
              </Box>
            )}
          </Grid>
        ))}
      </Box>

      <Box h={isNotSmallerScreen ? "100vh" : "85vh"} position="relative">
        <Container maxW="container.xl">
          <Box
            display="flex"
            justifyContent="space-between"
            alignContent="center"
            alignItems="center"
            mb={5}
          >
            <Text fontSize="xl"> Chinese Drama</Text>
            <Box>
              <Link to="/chinese">View More</Link>
            </Box>
          </Box>

          <Box>
            <ChinaDrama
              isNotSmallerScreen={isNotSmallerScreen}
              chinese={chinese}
              handleMovie={handleMovie}
            />
          </Box>
        </Container>
      </Box>

      <Box h="90vh" position="relative">
        <Container maxW="container.xl">
          <Box
            display="flex"
            justifyContent="space-between"
            alignContent="center"
            alignItems="center"
            mb={5}
          >
            <Text fontSize="xl"> Korean Drama</Text>
            <Box>
              <Link to="/korean">View More</Link>
            </Box>
          </Box>
          <Box>
            <KoreanDrama
              isNotSmallerScreen={isNotSmallerScreen}
              korean={korean}
              handleMovie={handleMovie}
            />
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
