import React from "react";

import { Container } from "./styles";
import Config from "../../config.json";

import Header from "../Header";
import SideBar from "../SideBar";
import Routes from "../../routes";

function Layout() {
  const { title, titleSideBar } = Config;
  return (
    <Container>
      <Header title={title} />
      <SideBar title={titleSideBar} />
      <Routes />
    </Container>
  );
}

export default Layout;
