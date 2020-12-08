import React, { useState, useEffect } from "react";

import {
  Container,
  ContainerHeader,
  ItemList,
  List,
  Title,
  Line,
  Linker,
  IconGrid,
  IconDashboard,
  IconMenu,
  IconSettings
} from "./styles";

import Config from "../../config";

function SideBar() {
  const { titleSideBar: title } = Config;
  const [routeActive, setRouteActive] = useState("/");

  useEffect(() => {
   setRouteActive(window.location.pathname);
  }, []);

  return (
    <Container>
      <ContainerHeader>
        <IconMenu />
        <Title>{title}</Title>
      </ContainerHeader>
      <Line />
      <List>
        <Linker to="/" onClick={() => setRouteActive("/")}>
          <ItemList active={routeActive === "/" ? true : false}>
            <IconGrid />
            Grid
          </ItemList>
        </Linker>
        <Linker to="/dashboard" onClick={() => setRouteActive("/dashboard")}>
          <ItemList active={routeActive === "/dashboard" ? true : false}>
            <IconDashboard />
            Dashboard
          </ItemList>
        </Linker>
        <Linker to="/settings" onClick={() => setRouteActive("/settings")}>
          <ItemList active={routeActive === "/settings" ? true : false}>
            <IconSettings />
            Settings
          </ItemList>
        </Linker>
      </List>
    </Container>
  );
}

export default SideBar;
