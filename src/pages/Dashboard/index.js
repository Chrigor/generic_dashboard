import React from "react";

import { Container } from "./styles";
import { useSelector } from "react-redux";

function Dashboard() {
  const data = useSelector((state) => state.grid.data);

  console.log(data);
  return <Container></Container>;
}

export default Dashboard;
