import React from "react";

import {
  Container,
  ContainerExtra,
  TitleHeader,
  IconSearch,
  IconNotification,
} from "./styles";

import Config from "../../config";

function Header() {
  const { title } = Config;
  return (
    <Container>
      <TitleHeader>{title}</TitleHeader>
      <ContainerExtra>
        <IconSearch />
        <IconNotification />
      </ContainerExtra>
    </Container>
  );
}

export default Header;
