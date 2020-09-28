import styled, { css } from "styled-components";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiCommand } from "react-icons/fi";
import { BiBarChartAlt } from "react-icons/bi";

import { Line, Bar, HorizontalBar } from "react-chartjs-2";

export const Container = styled.div`
  grid-area: CG;

  display: flex;
  flex-direction: column;

  margin: 0px 8px;
  padding: 8px;

  border-radius: 8px;

  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color:var(--quinary);
    border-radius:4px;
  }
  ::-webkit-scrollbar-track {
    background-color:var(--secondary);
  }
`;

export const ContainerChart = styled.div`
  display: flex;
  flex-direction:column;
  width: 100%;
  background: var(--backgroundChart);

  border-radius: 8px;

  padding: 8px 12px;
  margin: 0px 12px 12px 0px;
  box-sizing:border-box;

  min-width:600px;
  min-height: 300px;
`;

export const TitleChart = styled.h1`
  color: var(--white);
  font-weight: 100;
  font-size: 28px;

  display: flex;
  align-items: center;

  margin-bottom: 16px;
`;

export const SubtitleChart = styled.h3`
  color: var(--gray);
  font-weight: normal;
  font-size: 12px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;

  justify-content:center;
  align-items:center;

  @media (max-width: 1000px) {
   flex-direction:column;
  }

  margin: 8px;

`;

const cssIcon = css`
  height: 24px;
  width: 24px;
  margin: 0px 4px;
`;

export const IconNotify = styled(IoMdNotificationsOutline)`
  ${cssIcon}
  color:var(--quaternary);
`;

export const IconCommand = styled(FiCommand)`
  ${cssIcon}
  color:var(--mention-message);
`;

export const IconChart = styled(BiBarChartAlt)`
  ${cssIcon}
  color:var(--chart);
`;

export const LineChart = styled(Line)`
 
`;

export const BarChart = styled(Bar)`
 
`;

export const HorizontalBarChart = styled(HorizontalBar)`
 
`;
