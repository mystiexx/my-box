import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { Box, Container, Grid, Image, Text } from "@chakra-ui/react";
import SearchBar from "../../components/searchbar/SearchBar";
import { useMediaQuery } from "@chakra-ui/media-query";
import Modal from "../../components/modal/Modal";
import ViewDrama from "../Chinese/ViewDrama";

const Thailand = ({ reviews }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  const [movies, setMovies] = useState(null);
  const [movie, setMovie] = useState({});
  const [open, setOpen] = useState(false);

  const handleMovie = (movie) => {
    setMovie(movie);
    setOpen(!open);
  };

  const toggle = () => {
    setOpen(!open);
  };

  const handleSearch = (e) => {
    const searchString = e.target.value.toLowerCase();
    if (!searchString) {
      setMovies(reviews);
    } else {
      const result = movies.filter((movie) =>
        movie?.title?.toLowerCase().includes(searchString)
      );
      setMovies(result);
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  useEffect(() => {
    setMovies(reviews);
  }, [reviews]);
  return (
    <Layout>
      <Box mt={5} pb={isNotSmallerScreen ? "50px" : "50px"}>
        <Modal Open={open} toggle={toggle}>
          <ViewDrama movie={movie} toggle={toggle} />
        </Modal>
        <Container maxW="container.xl">
          <SearchBar handleSearch={handleSearch} />

          <Box mt={5}>
            <Grid
              templateColumns={
                isNotSmallerScreen ? "repeat(5, 1fr)" : "repeat(2, 1fr)"
              }
              gap={4}
            >
              {movies
                ?.filter((item) => item.country === "thailand")
                .map((movie) => (
                  <Box key={movie.id} onClick={() => handleMovie(movie)}>
                    <Image src={movie.imageurl} alt={movie.imageurl} />
                    <Text>{movie.title}</Text>
                  </Box>
                ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Thailand;
