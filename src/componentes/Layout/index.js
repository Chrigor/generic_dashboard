import React from "react";

import { Container } from "./styles";
import Config from "../../config.json";

import Header from "../Header";
import SideBar from "../SideBar";

function Layout() {
  const { title, titleSideBar } = Config;
  return (
    <Container>
      <Header title={title}/>
      <SideBar title={titleSideBar}/>
    </Container>
  );
}

export default Layout;
