import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { Container } from "./styles";
import dados from "../../data.json";

function Grid({ columns }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dados);
  }, []);

  const options = {
    filterType: "checkbox",
  };

  return (
    <Container>
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />
    </Container>
  );
}

export default Grid;
