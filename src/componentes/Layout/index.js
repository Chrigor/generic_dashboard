import React, {useEffect} from "react";
import { useDispatch } from "react-redux";

import Header from "../Header";
import SideBar from "../SideBar";
import Routes from "../../routes";

import dados from "../../data.json";
import { GRID_ADD_DATA } from "../../store/reducers/Grid/actions";

import { Container } from "./styles";

function Layout() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GRID_ADD_DATA(dados));
  }, []);

  return (
    <Container>
      <Header />
      <SideBar />
      <Routes />
    </Container>
  );
}

export default Layout;
