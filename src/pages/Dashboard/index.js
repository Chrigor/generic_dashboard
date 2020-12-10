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
  const [chartMain, setChartMain] = useState({});
  const [chartSecond, setChartSecond] = useState({});
  const [chartThird, setChartThird] = useState({});
  const [chartFour, setChartFour] = useState({});

  const { dashboard } = Config;
  const { options, formatDataChartMain, formatDataChartSecond, formatDataChartThird, formatDataChartFour, titleChartMain, titleChartSecond, titleChartThird, titleChartFour } = dashboard;

  useEffect(() => {
    const configCharMain = formatDataChartMain(data);
    setChartMain(configCharMain);

    const configChartSecond = formatDataChartSecond(data);
    setChartSecond(configChartSecond);

    const configChartThird = formatDataChartThird(data);
    setChartThird(configChartThird);

    const configChartFour = formatDataChartFour(data);
    setChartFour(configChartFour);

    console.log("Chamo de novo");
  }, [data]);


  return (
    <Container>
      <Row>
        <ContainerChart>
          <Header>
            <SubtitleChart>Total</SubtitleChart>
            <TitleChart>{titleChartMain}</TitleChart>
          </Header>
          <LineChart height={65} data={chartMain} options={options} />
        </ContainerChart>
      </Row>

      <Row>
        <ContainerChart>
          <Header>
            <SubtitleChart>Total {titleChartSecond}</SubtitleChart>
            <TitleChart>
              <IconNotify />
              {titleChartSecond}
            </TitleChart>
          </Header>
          <BarChart height={80} data={chartSecond} options={options} />
        </ContainerChart>

        <ContainerChart>
          <Header>
            <SubtitleChart>Total por {titleChartThird}</SubtitleChart>
            <TitleChart>
              <IconCommand />
              {titleChartThird}
            </TitleChart>
          </Header>
          <LineChart height={80} data={chartThird} options={options} />
        </ContainerChart>

        <ContainerChart>
          <Header>
            <SubtitleChart>Total por {titleChartFour}</SubtitleChart>
            <TitleChart>
              <IconChart />
              {titleChartFour}
            </TitleChart>
          </Header>
          <BarChart height={80} data={chartFour} options={options} />
        </ContainerChart>
      </Row>
    </Container>
  );
}

export default Dashboard;
