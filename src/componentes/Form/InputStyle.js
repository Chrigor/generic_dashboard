import styled from 'styled-components';

export const InputCustom = styled.input`
    width: 100%;
    margin-bottom:8px;
    padding: 12px 16px;
    border-radius: 4px;
    border: 2px solid #ddd;
    font-size: 15px;
    color: #444;
    transition: border-color 0.2s;

    &:focus {
        border-color: var(--quinary);
    }
`;

export const Label = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--white);
`;

export const ContainerInput = styled.div`
    margin:16px 0px;
`