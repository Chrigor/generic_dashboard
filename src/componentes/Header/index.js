import React from "react";
import PropTypes from 'prop-types';

import {
  Container,
  ContainerExtra,
  TitleHeader,
  IconSearch,
  IconNotification,
} from "./styles";

function Header({ title }) {
  return (
    <Container>
      <TitleHeader>{title}</TitleHeader>
      <ContainerExtra>
        <IconSearch />
        <IconNotification />
      </ContainerExtra>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Dashboard' 
};

export default Header;
