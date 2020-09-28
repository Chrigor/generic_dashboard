import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { BsGrid1X2Fill } from "react-icons/bs";
import { GoGraph, GoRocket } from "react-icons/go";

export const Container = styled.div`
  grid-area: SB;
  background: var(--quaternary);
  border-radius: 8px;

  padding: 16px;

  display: flex;
  flex-direction: column;

  margin: 8px;

  min-width: 200px;
  max-height: 90vh;
`;

export const ContainerHeader = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;

  align-self:center;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  color: var(--white);
`;

export const List = styled.ul``;

export const Line = styled.div`
  width: 90%;
  height: 1px;
  background: var(--border-white);
  opacity: 0.6;
  margin: 8px 0px;
  align-self: center;
`;

export const ItemList = styled.li`
  display: flex;
  align-items: center;

  cursor: pointer;
  list-style: none;

  width: 100%;
  height: 50px;
  color: ${(props) => (props.active ? "var(--white)" : "var(--border-white)")};

  &:hover {
    color: var(--white);
  }
`;

const cssIcon = css`
  height: 24px;
  width: 24px;
  margin:0px 16px;
`;

export const IconGrid = styled(BsGrid1X2Fill)`
  ${cssIcon}
`;

export const IconDashboard = styled(GoGraph)`
  ${cssIcon}
`;

export const IconMenu = styled(GoRocket)`
  ${cssIcon}
  color: var(--white);
  margin:0 8px;
`

export const Linker = styled(Link)`
  text-decoration:none;
`
