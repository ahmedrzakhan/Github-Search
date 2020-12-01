import React from "react";
import { useHistory } from "react-router-dom";
import {Button, Nav } from "./Styles";

const Navbar = () => {
  const history = useHistory();

  return (
    <Nav>
      <Button onClick={() => history.push("/")}>Home</Button>
    </Nav>
  );
};

export default Navbar;
