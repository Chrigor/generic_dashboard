import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { Container } from "./styles";
import dados from "../../data.json";

import Config from "../../config";

function Grid() {
  const [data, setData] = useState([]);
  
  const { grid } = Config;
  const { columns, titleGrid, options } = grid;

  useEffect(() => {
    setData(dados); // esses dados deveram estar no redux
  }, []);

  return (
    <Container>
      <MUIDataTable title={titleGrid} data={data} columns={columns} options={options}/>
    </Container>
  );
}

export default Grid;
