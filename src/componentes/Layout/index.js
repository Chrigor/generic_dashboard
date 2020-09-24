import React from "react";

import { Container } from "./styles";

import Header from "../Header";
import SideBar from "../SideBar";
import Routes from "../../routes";

function Layout() {
  return (
    <Container>
      <Header />
      <SideBar />
      <Routes />
    </Container>
  );
}

export default Layout;
