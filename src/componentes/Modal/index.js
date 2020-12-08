import React, { useState } from "react";
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

function Modal({ setModal, title }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const { filtersInput } = Config;

  const [form, setForm] = useState(
    filtersInput.reduce((acc, field) => {
      return {
        ...acc,
        [field.identificador]: ""
      };
    }, {})
  );

  function handleChange({ target }) {
    const { value, id } = target;
    setForm({ ...form, [id]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const constraints = [];

    for (let key in form) {
      if (form[key].length > 0) {
        let constraint = createConstraint(key, form[key]);
        constraints.push(constraint);
      }
    }

    const getData = async () => {
      setLoading(true);
      try {
        const datasetName = Config.dataset;

        console.log(datasetName);
        console.log(constraints);

        const data = await getDataset(datasetName, constraints);
        dispatch(GRID_ADD_DATA(data));
        setModal(false);
      } catch (error) {
        toast.error("Houve um erro ao buscar os dados.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }

  return (
    <Container>
      {loading && <Loading />}
      <ContainerBlur />
      <ContainerModal>
        <Header>
          <Title>{title}</Title>
          <button onClick={() => setModal(false)}>
            <IconClose />
          </button>
        </Header>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <ContainerInputs>
              {filtersInput.map(
                ({
                  label,
                  identificador,
                  dataset,
                  change,
                  type,
                  required,
                  width,
                  constraintName,
                }) => {
                  return (
                    <ContainerInput key={identificador}>
                      <LabelModal>{label}</LabelModal>
                      {dataset && (
                        <SelectModal
                          id={identificador}
                          name={identificador}
                          value={form[identificador]}
                          required={required}
                          width={width ? width : ""}
                          data-constraint-name={constraintName}
                          onChange={(event) => {
                            handleChange(event);
                            change(event);
                          }}
                        >
                          <option value="">Selecione uma opção</option>
                          <option value="2">2</option>
                        </SelectModal>
                      )}

                      {!dataset && (
                        <InputModal
                          id={identificador}
                          name={identificador}
                          value={form[identificador]}
                          type={type}
                          required={required}
                          width={width ? width : ""}
                          data-constraint-name={constraintName}
                          onChange={(event) => {
                            handleChange(event);
                            change(event);
                          }}
                        />
                      )}
                    </ContainerInput>
                  );
                }
              )}
            </ContainerInputs>

            <ContainerButtons>
              <Button type="submit">Enviar</Button>
              <Button onClick={() => setModal(false)}>Cancelar</Button>
            </ContainerButtons>
          </Form>
        </ModalBody>
      </ContainerModal>
    </Container>
  );
}

export default Modal;
