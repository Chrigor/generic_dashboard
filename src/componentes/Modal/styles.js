import styled from "styled-components";
import { FaWindowClose } from "react-icons/fa";

export const Container = styled.div``;

export const ContainerBlur = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 3 !important;

  position: absolute;
  left: 0;
  top: 0;
  background: var(--white);
  opacity: 0.6;
  filter: blur(15px);
`;

export const ContainerModal = styled.div`
  border-radius:8px;
  padding: 8px;

  width: 100%;
  max-width: 800px;

  height: 60vh;

  overflow-x: hidden;
  background: var(--secondary);

  z-index: 4 !important;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color:var(--quinary);
    border-radius:4px;
  }
  ::-webkit-scrollbar-track {
    background-color:var(--secondary);
  }
`;

export const Header = styled.header`

  position:sticky;
  top:0;
  left:0;

  border-bottom:1px solid var(--primary);

  &:before {
    content:'';
    height: 12px;
    width:12px;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 70px;

  padding: 16px;

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

export const ModalBody = styled.div`
  height: 100%;

`