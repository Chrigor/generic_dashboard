import React from "react";

import {
  Container,
  ContainerChart,
  IconNotify,
  IconCommand,
  IconChart,
  Header,
  LineChart,
  TitleChart,
  SubtitleChart,
  Row,
} from "./styles";

import { useSelector } from "react-redux";

function Dashboard() {
  const data = useSelector((state) => state.grid.data);

  const dataChart = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 7,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const options = {
    responsive:true,
    legend: {
      display:false,
      labels: {
        fontColor: "gray",
        fontSize: 18,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "gray",
            fontSize: 18,
            stepSize: 1,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "gray",
            fontSize: 14,
            stepSize: 1,
          },
        },
      ],
    },
  };

  return (
    <Container>
      <ContainerChart>
        <Header>
          <SubtitleChart>Total Shipments</SubtitleChart>
          <TitleChart>Performance</TitleChart>

          <LineChart height={60} data={dataChart} options={options} />
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
