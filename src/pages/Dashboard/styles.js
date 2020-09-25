import styled, { css } from "styled-components";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiCommand } from "react-icons/fi";
import { BiBarChartAlt } from "react-icons/bi";

export const Container = styled.div`
  grid-area: CG;

  display: flex;
  flex-direction: column;

  margin: 0px 8px;
  padding: 8px;

  border-radius: 8px;
`;

export const ContainerChart = styled.div`
  display: flex;
  flex: 1;
  min-height: 300px;
  background: var(--backgroundChart);
  border-radius: 8px;

  padding: 8px 12px;

  margin: 0px 12px 12px 0px;
`;

export const TitleChart = styled.h1`
  color: var(--white);
  font-weight: 100;
  font-size: 28px;

  display: flex;
  align-items: center;
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
