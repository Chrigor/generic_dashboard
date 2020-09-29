import styled, { css } from "styled-components";
import { BsFilter } from "react-icons/bs";
import { RiNotificationFill } from "react-icons/ri";

export const Container = styled.div`
  grid-area: MH;

  background: var(--secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top:0;
  left:0;
  z-index:2;

  width: 100%;
`;

export const TitleHeader = styled.h1`
  font-weight: 500;
  font-size: 24px;
  color: var(--white);
  margin: 0 24px;
`;

export const ContainerExtra = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 0 24px;
  height: 45px;
  width: 100px;
`;

const cssIcon = css`
  color: var(--white);
  height: 32px;
  width: 32px;
  cursor:pointer;

  transition: all 300ms;

  &:hover {
    color:var(--quinary);
  }
`;

export const IconFilter = styled(BsFilter)`
  ${cssIcon}
`;

export const IconNotification = styled(RiNotificationFill)`
  ${cssIcon}
`;
