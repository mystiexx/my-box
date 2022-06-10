import React, { useState, useEffect } from "react";
import { Box, Container, Button, Text, IconButton } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import { useMediaQuery } from "@chakra-ui/media-query";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Modal from "../modal/Modal";
import Mobile from "./mobile";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setOpen(!open);
  };

  const handleNavigate = () => {
    navigate("/add");
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);
  return (
    <Box>
      <Modal Open={open} toggle={toggle}>
        <Mobile toggle={toggle} />
      </Modal>
      <Container maxW="container.xl">
        <Box
          display="flex"
          justifyContent="space-between"
          alignContent="center"
          alignItems="center"
          w="100%"
          mt={5}
        >
          <Link to="/">
            <Text>viewr</Text>
          </Link>
          <IconButton
            display={isNotSmallerScreen ? "none" : "block"}
            icon={<HiOutlineMenuAlt3 size={30} color="#fff" />}
            backgroundColor="transparent"
            onClick={() => setOpen(!open)}
          />
          <Box display={isNotSmallerScreen ? "block" : "none"}>
            <NavLink to="/chinese" className="link" activeClassName="active">
              Chinese
            </NavLink>
            <NavLink to="/korean" className="link">
              Korean
            </NavLink>
            <NavLink to="/thailand" className="link">
              Thailand
            </NavLink>
          </Box>
          <Button
            onClick={handleNavigate}
            backgroundColor="yellow.400"
            color="#2E2E2E"
            display={isNotSmallerScreen ? "block" : "none"}
          >
            Add movie
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
