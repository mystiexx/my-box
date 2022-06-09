import React from "react";
import { Box, Button, IconButton } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router";

const Mobile = ({ toggle }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/add");
  };
  return (
    <Box>
      <IconButton
        onClick={toggle}
        icon={<AiOutlineClose color="#fff" size={20} />}
        backgroundColor="transparent"
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        h="90vh"
      >
        <NavLink to="/chinese" style={{ marginBottom: "30px" }}>
          Chinese
        </NavLink>
        <NavLink to="/korean" style={{ marginBottom: "30px" }}>
          Korean
        </NavLink>

        <NavLink to="/thailand" style={{ marginBottom: "30px" }}>
          Thailand
        </NavLink>

        <Button
          backgroundColor="yellow.400"
          color="#2E2E2E"
          onClick={handleNavigate}
        >
          {" "}
          Add Movie{" "}
        </Button>
      </Box>
    </Box>
  );
};

export default Mobile;
