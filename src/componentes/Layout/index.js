import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Header from "../Header";
import SideBar from "../SideBar";
import Routes from "../../routes";

import Loading from "../../componentes/Loading";

import getDataset from "../../utils/getDataset";
import Config from '../../config';
import { GRID_ADD_DATA } from "../../store/reducers/Grid/actions";

import { Container } from "./styles";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const datasetName = Config.dataset;
        const data = await getDataset(datasetName);
        // throw "ERRO";
        dispatch(GRID_ADD_DATA(data));
      } catch (error) {
        toast.error("Houve um erro ao buscar os dados.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <Container>
      {loading && <Loading />}
      <ToastContainer />
      <Header />
      <SideBar />
      <Routes />
    </Container>
  );
}

export default Layout;
