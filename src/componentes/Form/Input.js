import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import {InputCustom, Label, ContainerInput} from './InputStyle';


function Input({ name, label, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {

        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })

        console.log(inputRef.current.value);
    }, [fieldName, registerField]);

    return (
        <ContainerInput>
            <Label htmlFor={fieldName}>{label}</Label>
            <InputCustom ref={inputRef} defaultValue={defaultValue} {...rest} />
            {error && <span style={{ color: "var(--notification)" }}>{error}</span>}
        </ContainerInput>
    );
}

export default Input;