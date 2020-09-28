import styled from "styled-components";
import { FaWindowClose } from "react-icons/fa";

export const Container = styled.div``;

export const ContainerBlur = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 10!important;

  position: absolute;
  left: 0;
  top: 0;
  background: var(--primary);
  opacity: 0.6;
  filter: blur(15px);
`;

export const ContainerModal = styled.div`
  border-radius: 8px;
  padding: 8px;

  width: 90%;
  max-width: 800px;

  height: 70vh;

  overflow-x: hidden;
  background: var(--secondary);

  z-index: 99!important;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--quinary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;

  margin: 4px;

  z-index: 3 !important;
  background:var(--secondary);

  border-bottom: 1px solid var(--primary);

  &:before {
    content: "";
    height: 12px;
    width: 12px;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 70px;

  padding: 16px;

  box-sizing: border-box;

  > button {
    cursor: pointer;
    border: 0;
    background: transparent;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  color: var(--white);
`;

export const IconClose = styled(FaWindowClose)`
  color: var(--white);
  height: 24px;
  width: 24px;
`;

export const ContainerInputs = styled.div`
  width: 100%;
`

export const ModalBody = styled.div`
  padding: 12px 18px;
  height: 90%;
`;

export const Form = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;

  height: 100%;
`

export const InputModal = styled.input`
  height: 42px;
  padding: 4px;

  width: ${(props) => (props.width ? props.width : "100%")};

  border-radius: 4px;
  border: 1px solid var(--primary);
  border: none;
`;
export const SelectModal = styled.select`
  height: 42px;
  padding: 4px;

  border-radius: 4px;
  border: 1px solid var(--primary);
  border: none;
  outline: none;
  width: ${(props) => (props.width ? props.width : "100%")};
`;

export const LabelModal = styled.label`
  color: var(--white);
`;

export const ContainerInput = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;

  margin: 12px 4px;
  outline: none;
`;

export const Button = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid var(--white);
  border-radius: 0.2em;
  color: var(--white);
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1em 1.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;

  transition: all 300ms ease-in-out;

  background-image: linear-gradient(45deg, var(--quinary) 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;

  &:hover,
  &:focus {
    outline: 0;
    background-position: 0;

    border-color: var(--quinary);
    color: var(--white);
  }
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  align-items:center;

  /* position:fixed;
  bottom:10px;
  left:0; */
`