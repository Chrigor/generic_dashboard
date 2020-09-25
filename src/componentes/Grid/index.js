import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { Container } from "./styles";

import Config from "../../config";
import { useSelector } from "react-redux";

function Grid() {

  const data = useSelector((state) => state.grid.data);

  const { grid } = Config;
  const { columns, titleGrid, options } = grid;

  return (
    <Container>
      <MUIDataTable
        title={titleGrid}
        data={data}
        columns={columns}
        options={options}
      />
    </Container>
  );
}

export default Grid;
