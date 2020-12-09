import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from 'react-select';

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



import Button from '../Button';
import createConstraint from '../../utils/createConstraint';
import Loading from "../../componentes/Loading";
import Config from "../../config";


import getDataset from "../../utils/getDataset";
import { GRID_ADD_DATA } from "../../store/reducers/Grid/actions";

import { toast } from 'react-toastify';

function Modal({ setModal, data }) {
  const dispatch = useDispatch();

  const [form, setForm] = useState(
    data.columns.reduce((acc, field) => {
      return {
        ...acc,
        [field.name]: ""
      };
    }, {})
  );

  const [dataSelect, setDataSelect] = useState(
    data.columns.reduce((acc, field) => {
      return {
        ...acc,
        [field.name]: []
      };
    }, {})
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const inputDataset = data.columns.filter((element) => element.options.dataset);
    const newData = {};

    const mountSelects = async () => {
      try {

        setLoading(true);
        for (let input of inputDataset) {
          console.log("Input");
          console.log(input);

          const { name: identificador } = input;
          const { labelDataset, valueDataset, dataset } = input.options;
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

  useEffect(() => {
    const dataInput = data.rowData.map((elemento) => {
      if (typeof elemento == "object") {

        if (typeof elemento.props.children == "object") {
          return elemento.props.children[elemento.props.children.length - 1];
        }

        return elemento.props.children;
      }
      return elemento;
    });

    const dataForm = data.columns.map((elemento, indice) => {
      return ([elemento.name, dataInput[indice]])
    })

    setForm(Object.fromEntries(dataForm));
  }, []);

  function handleChange({ target }) {
    const { value, id } = target;
    setForm({ ...form, [id]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);

      const constraints = [];

      for (let key in form) {
        let constraint = createConstraint(key, form[key]);
        constraints.push(constraint);
      }

      console.log("Constraints");
      console.log(constraints);

      const data = await getDataset(Config["datasetUpdate"], constraints);

      setModal(false);
      toast.success("Dados atualizados com sucesso!");
    } catch (error) {
      toast.error("Houve um erro ao atualizar os dados do dashboard");
    } finally {
      setLoading(false);
    }

  }

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
          <Form onSubmit={handleSubmit}>
            <ContainerInputs>
              {data.columns.map(
                (elemento) => {

                  const { label, options, name: identificador } = elemento;

                  const {
                    dataset,
                    type,
                    required,
                    width,
                    editable = false } = options;

                  return (
                    <ContainerInput key={identificador}>
                      <LabelModal>{label}</LabelModal>
                      {dataset && (
                        <Select
                          value={dataSelect[identificador].find((elemento) => elemento.value === form[identificador])}
                          options={dataSelect[identificador]}
                          onChange={({ value }) => {
                            const event = {
                              target: {
                                value,
                                id: identificador
                              }
                            }
                            handleChange(event);
                          }}
                        />
                      )}

                      {!dataset && (
                        <InputModal
                          id={identificador}
                          name={identificador}
                          value={form[identificador]}
                          type={type}
                          readOnly={!editable}
                          required={required}
                          width={width ? width : ""}
                          onChange={(event) => {
                            handleChange(event);
                          }}
                        />
                      )}
                    </ContainerInput>
                  );
                }
              )}
            </ContainerInputs>



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
