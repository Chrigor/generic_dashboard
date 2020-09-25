import React, {useEffect} from "react";

import { Container } from "./styles";
import { useDispatch } from "react-redux";
import GridComponent from "../../componentes/Grid";

import dados from "../../data.json";

import { GRID_ADD_DATA } from "../../store/reducers/Grid/actions";

function Grid({ columns }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GRID_ADD_DATA(dados));
  }, []);

  return (
    <Container>
      <GridComponent columns={columns}/>
    </Container>
  );
}

export default Grid;
