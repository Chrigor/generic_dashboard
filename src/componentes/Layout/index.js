import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "../Header";
import SideBar from "../SideBar";
import Routes from "../../routes";

import getDataset from "../../utils/getDataset";

import dados from "../../data.json";
import { GRID_ADD_DATA } from "../../store/reducers/Grid/actions";

import { Container } from "./styles";

function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDataset("colleague");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();

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
