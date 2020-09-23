import React from "react";

import { Container } from "./styles";
import GridComponent from "../../componentes/Grid";

function Grid({ columns }) {
  return (
    <Container>
      <GridComponent columns={columns}/>
    </Container>
  );
}

export default Grid;
