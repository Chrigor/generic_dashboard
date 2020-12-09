import React, { useEffect, useState } from "react";
import Select from 'react-select';

import Button from '../Button';
import createConstraint from '../../utils/createConstraint';
import {
  Container,
  ContainerBlur,
  ContainerButtons,
  ContainerModal,
  ContainerInput,
  ContainerInputs,
  Form,
  LabelModal,
  InputModal,
  SelectModal,
  Header,
  IconClose,
  ModalBody,
  Title,
} from "./styles";

import { useDispatch } from "react-redux";

import Loading from "../../componentes/Loading";
import Config from "../../config";


import getDataset from "../../utils/getDataset";
import { GRID_ADD_DATA } from "../../store/reducers/Grid/actions";

import { toast } from 'react-toastify';

function Modal({ setModal }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  return (
    <Container>
      {loading && <Loading />}
      <ContainerBlur />
      <ContainerModal>
        <Header>
          <Title>Atualizar Registro</Title>
          <button onClick={() => setModal(false)}>
            <IconClose />
          </button>
        </Header>
        <ModalBody>
          <Form>
            <ContainerButtons>
              <Button type="submit">Atualizar</Button>
              <Button onClick={() => setModal(false)}>Cancelar</Button>
            </ContainerButtons>
          </Form>
        </ModalBody>
      </ContainerModal>
    </Container>
  );
}

export default Modal;
