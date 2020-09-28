import React from "react";

import {
  Container,
  ContainerBlur,
  ContainerModal,
  Header,
  IconClose,
  ModalBody,
  Title,
} from "./styles";

function Modal({ setModal, title }) {
  return (
    <Container>
      <ContainerBlur />
      <ContainerModal>
        <Header>
          <Title>{title}</Title>
          <button onClick={() => setModal(false)}>
            <IconClose />
          </button>
        </Header>
        <ModalBody>

        </ModalBody>
      </ContainerModal>
    </Container>
  );
}

export default Modal;
