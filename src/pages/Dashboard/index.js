import React from "react";

import {
  Container,
  ContainerChart,
  IconNotify,
  IconCommand,
  IconChart,
  Header,
  TitleChart,
  SubtitleChart,
  Row,
} from "./styles";
import { useSelector } from "react-redux";

function Dashboard() {
  const data = useSelector((state) => state.grid.data);

  return (
    <Container>
      <ContainerChart>
        <Header>
          <SubtitleChart>Total Shipments</SubtitleChart>
          <TitleChart>Performance</TitleChart>
        </Header>
      </ContainerChart>
      <Row>
        <ContainerChart>
          <Header>
            <SubtitleChart>Total Shipments</SubtitleChart>
            <TitleChart>
              <IconNotify />
              Performance
            </TitleChart>
          </Header>
        </ContainerChart>

        <ContainerChart>
          <Header>
            <SubtitleChart>Total Shipments</SubtitleChart>
            <TitleChart>
              <IconCommand />
              Performance
            </TitleChart>
          </Header>
        </ContainerChart>

        <ContainerChart>
          <Header>
            <SubtitleChart>Total Shipments</SubtitleChart>
            <TitleChart>
              <IconChart />
              Performance
            </TitleChart>
          </Header>
        </ContainerChart>
      </Row>
    </Container>
  );
}

export default Dashboard;
