import React, { useState } from "react";

import {
  Container,
  ContainerExtra,
  TitleHeader,
  IconSearch,
  IconNotification,
} from "./styles";

import Config from "../../config";
import Modal from "../Modal";

function Header() {
  const [modalVisible, setModalVisible] = useState(false);
  const { title } = Config;

  function handleClickFilter() {
    setModalVisible(!modalVisible);
  }

  return (
    <>
      {modalVisible && <Modal title="Filtrar" setModal={setModalVisible}/>}
      <Container>
        <TitleHeader>{title}</TitleHeader>
        <ContainerExtra>
          <IconSearch onClick={handleClickFilter} />
          <IconNotification />
        </ContainerExtra>
      </Container>
    </>
  );
}

export default Header;
