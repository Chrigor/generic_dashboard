import React from "react";

import PropTypes from "prop-types";
import {
  Container,
  ContainerHeader,
  ItemList,
  List,
  Title,
  Line,
  IconGrid,
  IconDashboard,
  IconMenu,
} from "./styles";

function SideBar({ title }) {
  return (
    <Container>
      <ContainerHeader>
        <IconMenu />
        <Title>{title}</Title>
      </ContainerHeader>
      <Line />
      <List>
        <ItemList active>
          <IconGrid />
          Grid
        </ItemList>
        <ItemList>
          <IconDashboard />
          Dashboard
        </ItemList>
      </List>
    </Container>
  );
}

SideBar.propTypes = {
  title: PropTypes.string,
};

SideBar.defaultProps = {
  title: "Dashboard",
};

export default SideBar;
