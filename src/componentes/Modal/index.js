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

  const [dataSelect, setDataSelect] = useState(
    filtersInput.reduce((acc, field) => {
      return {
        ...acc,
        [field.identificador]: []
      };
    }, {})
  );

  useEffect(() => {

    const inputDataset = filtersInput.filter((element) => element.dataset);
    const newData = {};

    const mountSelects = async () => {
      try {

        setLoading(true);
        for (let input of inputDataset) {
          console.log("Input");
          console.log(input);

          const { labelDataset, valueDataset, identificador, dataset } = input;
          const values = await getDataset(dataset);
          const valuesFormatted = values.map((elemento) => {
            return {
              label: elemento[labelDataset],
              value: elemento[valueDataset]
            }
          });
          newData[identificador] = valuesFormatted;
        }

        setDataSelect(newData);

      } catch (error) {
        toast.error("Houve um erro ao buscar dados do select.");
      } finally {
        setLoading(false);
      }

    }

    mountSelects();
  }, []);

  function handleChange({ target }) {
    const { value, id } = target;
    setForm({ ...form, [id]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const constraints = [];

    for (let key in form) {
      console.log(form[key]);
      if (form[key].length > 0) {
        let constraint = createConstraint(key, form[key]);
        constraints.push(constraint);
      }
    }

    console.log("Constraint");
    console.log(constraints);

    const getData = async () => {
      setLoading(true);
      try {
        const datasetName = Config.dataset;
        const data = await getDataset(datasetName, constraints);

        dispatch(GRID_ADD_DATA(data));
        setModal(false);

        console.log("VALUES");
        console.log(data);

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
                  labelDataset,
                  valueDataset
                }) => {
                  return (
                    <ContainerInput key={identificador}>
                      <LabelModal>{label}</LabelModal>
                      {dataset && (

                        <Select
                          label="Single select"
                          options={dataSelect[identificador]}
                          onChange={({ value }) => {
                            const event = {
                              target: {
                                value,
                                id: identificador
                              }
                            }
                            handleChange(event);
                            change(event);
                          }}
                        />
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
