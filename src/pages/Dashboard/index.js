import React, { useState, useEffect } from "react";

import {
  Container,
  ContainerChart,
  IconNotify,
  IconCommand,
  IconChart,
  Header,
  LineChart,
  BarChart,
  TitleChart,
  SubtitleChart,
  Row,
} from "./styles";

import Config from "../../config";

import { useSelector } from "react-redux";

function Dashboard() {
  const data = useSelector((state) => state.grid.data);
  const [gradient, setGradient] = useState("transparent");
  const [chartMain, setChartMain] = useState({});
  const [chartSecond, setChartSecond] = useState({});
  const [chartThird, setChartThird] = useState({});
  const [chartFour, setChartFour] = useState({});

  const { dashboard } = Config;
  const { options, formatDataChartMain, formatDataChartSecond, formatDataChartThird, formatDataChartFour} = dashboard;

  useEffect(() => {
    const configCharMain = formatDataChartMain(data);
    setChartMain(configCharMain);

    const configChartSecond = formatDataChartSecond(data);
    setChartSecond(configChartSecond);

    const configChartThird= formatDataChartThird(data);
    setChartThird(configChartThird);

    const configChartFour= formatDataChartFour(data);
    setChartFour(configChartFour);

  }, [data]);


  return (
    <Container>
      <Row>
        <ContainerChart>
          <Header>
            <SubtitleChart>Total</SubtitleChart>
            <TitleChart>Total de ocorrencias por mês</TitleChart>
          </Header>
          <LineChart height={70} data={chartMain} options={options} />
        </ContainerChart>
      </Row>

      <Row>
        <ContainerChart>
          <Header>
            <SubtitleChart>Total Status</SubtitleChart>
            <TitleChart>
              <IconNotify />
              Status
            </TitleChart>
          </Header>
          <BarChart height={80} data={chartSecond} options={options} />
        </ContainerChart>

        <ContainerChart>
          <Header>
            <SubtitleChart>Total por Area</SubtitleChart>
            <TitleChart>
              <IconCommand />
              Areas
            </TitleChart>
          </Header>
          <LineChart height={80} data={chartThird} options={options} />
        </ContainerChart>

        <ContainerChart>
          <Header>
            <SubtitleChart>Total</SubtitleChart>
            <TitleChart>
              <IconChart />
              Tipos
            </TitleChart>
          </Header>
          <BarChart height={80} data={chartFour} options={options} />
        </ContainerChart>
      </Row>
    </Container>
  );
}

export default Dashboard;
