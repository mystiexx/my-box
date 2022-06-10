import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { Box, Container, Grid, Text, Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import "./style.css";
import { Link } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import ViewDrama from "../Chinese/ViewDrama";
import DramaList from "../../components/dramalist/DramaList";

const Home = ({ reviews }) => {
  const [chinese, setChinese] = useState(null);
  const [korean, setKorean] = useState(null);
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 920px)");
  const [movie, setMovie] = useState({});
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState({});

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
    const randMov = Math.floor(Math.random() * reviews.length);
    const rand = reviews[randMov];
    console.log(rand);
    setDisplay(rand);
  }, [reviews]);

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
      <Box h={isNotSmallerScreen ? "100vh" : "60vh"}>
        <Grid
          templateColumns={
            isNotSmallerScreen ? "repeat(2,1fr)" : "repeat(1,1fr)"
          }
          gap={2}
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
                  {display?.title}
                </Text>
                <Text fontSize="md" fontWeight="500">
                  {display?.review?.slice(0, 300)}...
                </Text>
              </Box>
            </Container>
          </Box>

          {isNotSmallerScreen ? (
            <Box zIndex="-2" display={isNotSmallerScreen ? "block" : "none"}>
              <Image
                src={display.imageurl}
                alt={display.imageurl}
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
                width={isNotSmallerScreen ? "auto" : "100vw"}
                h={isNotSmallerScreen ? "100%" : "60vh"}
                src={display.imageurl}
                alt={display.imageurl}
                position="relative"
                top="5%"
                right="0"
                filter="auto"
                blur="1px"
                objectFit="cover"
              />
            </Box>
          )}
        </Grid>
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
            <DramaList
              isNotSmallerScreen={isNotSmallerScreen}
              movie={chinese}
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
            <DramaList
              isNotSmallerScreen={isNotSmallerScreen}
              movie={korean}
              handleMovie={handleMovie}
            />
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
