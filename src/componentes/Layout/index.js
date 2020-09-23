import React from "react";

import { Container } from "./styles";
import Config from "../../config.json";

import Header from "../Header";
import SideBar from "../SideBar";
import Routes from "../../routes";

function Layout() {
  const { title, titleSideBar, grid } = Config;
  const { columns } = grid;

  return (
    <Container>
      <Header title={title} />
      <SideBar title={titleSideBar} />
      <Routes columns={columns}/>
    </Container>
  );
}

export default Layout;
