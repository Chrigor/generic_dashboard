import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { Container } from "./styles";

import Config from "../../config";
import { useSelector } from "react-redux";
import ModalEditableRow from "../../componentes/ModalEditableRow";

function Grid() {
  const [modal, setModal] = useState(false);
  const data = useSelector((state) => state.grid.data);

  const { grid } = Config;
  const { columns, titleGrid, options } = grid;

  options.onRowClick = function(rowData, rowMeta){
    options.onRowClickCustom(rowData, rowMeta);
    setModal(true);
  }

  return (
    <Container>
      <MUIDataTable
        title={titleGrid}
        data={data}
        columns={columns}
        options={options}
      />
      {modal && <ModalEditableRow setModal={setModal} />}
    </Container>
  );
}

export default Grid;
