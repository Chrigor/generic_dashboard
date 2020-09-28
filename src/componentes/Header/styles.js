import styled, { css } from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { RiNotificationFill } from "react-icons/ri";

export const Container = styled.div`
  background: var(--secondary);
  grid-area: MH;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top:0;
  left:0;
  z-index:2;
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
`;

export const IconSearch = styled(BiSearchAlt)`
  ${cssIcon}
`;

export const IconNotification = styled(RiNotificationFill)`
  ${cssIcon}
`;
