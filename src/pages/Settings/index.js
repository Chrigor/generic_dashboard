import React, { useState, useEffect, useRef } from "react";
import { Form } from '@unform/web';
import { Container, ButtonSubmit } from "./styles";
import * as Yup from 'yup';
import Input from '../../componentes/Form/Input';
import Button from '../../componentes/Button';

function Settings() {

  const formRef = useRef(null);

  const initialData = {
    email: "ch",
  };

  async function handleSubmit(data, { reset }) {

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("O nome é obrigatório"),
        email: Yup.string().email("Digite um e-mail válido").required("O email é obrigatório")
      });

      await schema.validate(data, {
        abortEarly: false
      });

      reset();

    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {};
        error.inner.forEach((err) => {
          errorMessages[err.path] = err.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Container>
      <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
        <Input name="email" label="E-mail" />
        <Input name="name" label="Nome" />

        <Button type="submit"> Enviar </Button>
      </Form>
    </Container>
  );
}

export default Settings;
