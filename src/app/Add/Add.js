import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import {
  Box,
  Input,
  Button,
  Text,
  Container,
  Grid,
  Select,
  Textarea,
  FormControl,
} from "@chakra-ui/react";
import { TagsInput } from "./style";
import { useMediaQuery } from "@chakra-ui/media-query";
import app from "../../firebase";
import { getFirestore, setDoc, doc } from "firebase/firestore";

const Add = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  const [genre, setGenre] = useState([]);
  const [title, setTitle] = useState("");
  const [imageurl, setImageUrl] = useState("");
  const [videourl, setVideoUrl] = useState("");
  const [downloadurl, setDownloadUrl] = useState("");
  const [country, setCountry] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const removeTags = (indexToRemove) => {
    setGenre([...genre.filter((_, index) => index !== indexToRemove)]);
  };

  const addTags = (event) => {
    if (event.target.value !== "") {
      setGenre([...genre, event.target.value]);
    }
  };

  const clearInput = () => {
    setTitle("");
    setImageUrl("");
    setCountry("");
    setReview("");
    setDownloadUrl("");
    setVideoUrl("");
    setGenre([]);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    let data = {
      id: new Date() * 100000000,
      title,
      imageurl,
      videourl,
      downloadurl,
      country,
      review,
      genre,
      created_at: new Date().toISOString(),
    };
    const db = getFirestore(app);

    try {
      await setDoc(doc(db, "reviews", title), data).then((res) => {
        console.log(res.code);
        alert("added");
        setLoading(false);
      });
      clearInput();
    } catch (err) {
      console.log(err.code);
      setLoading(false);
    }
  };
  return (
    <Layout>
      <Box mt={5}>
        <Container maxW="container.sm">
          <Text mb={5}>Add Movie</Text>
          <FormControl>
            <Input
              placeholder="Movie Title"
              mb={5}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Input
              placeholder="Movie Image URL"
              mb={5}
              value={imageurl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
            <Grid
              templateColumns={
                isNotSmallerScreen ? "repeat(2, 1fr)" : "repeat(1, 1fr)"
              }
              gap={5}
              mb={5}
            >
              <Input
                placeholder="Movie Video URL"
                value={videourl}
                onChange={(e) => setVideoUrl(e.target.value)}
              />

              <Input
                placeholder="Movie Download URL"
                value={downloadurl}
                onChange={(e) => setDownloadUrl(e.target.value)}
                required
              />
            </Grid>
            <Grid
              templateColumns={
                isNotSmallerScreen ? "repeat(2, 1fr)" : "repeat(1, 1fr)"
              }
              gap={5}
              mb={5}
            >
              <TagsInput>
                <ul className="tags">
                  {genre.map((tag, index) => (
                    <li className="tag" key={index}>
                      <span className="tag-title">{tag}</span>
                      <span
                        className="tag-close-icon"
                        onClick={() => removeTags(index)}
                      >
                        x
                      </span>
                    </li>
                  ))}
                </ul>
                <Input
                  placeholder="Press enter to add Genre"
                  type="text"
                  border="none"
                  __focus={{
                    border: "none",
                    outline: "none",
                  }}
                  onKeyUp={(event) =>
                    event.key === "Enter" ? addTags(event) : null
                  }
                  required
                />
              </TagsInput>
              <Select
                palceholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option>--Choose Country--</option>
                <option value="chinese">Chinese</option>
                <option value="korean">Korean</option>
                <option value="thailand">Thailand</option>
              </Select>
            </Grid>
            <Textarea
              placeholder="Leave Review..."
              mb={5}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
            <Button
              disbabled={loading}
              color="#2e2e2e"
              w="100%"
              backgroundColor="yellow.400"
              type="submit"
              onClick={handleSubmit}
            >
              {" "}
              Save
            </Button>
          </FormControl>
        </Container>
      </Box>
    </Layout>
  );
};

export default Add;
