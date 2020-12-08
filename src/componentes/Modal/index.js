import React, { useState } from "react";
import Button from '../Button';
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

import Config from "../../config";

function Modal({ setModal, title }) {
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
    const nameConstraint = target.getAttribute("data-constraint-name");

    console.log(nameConstraint);
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(form);
  }

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
