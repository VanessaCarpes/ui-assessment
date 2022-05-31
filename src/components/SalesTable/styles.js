import styled from 'styled-components';
import { TableContainer } from '@material-ui/core';

export const Subtitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  font-family: 'Roboto';
  letter-spacing: 1.2px;
  color: #aca9a9;
`;

export const Content = styled.div`
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  letter-spacing: 1.2px;
  color: #606060;
`;

export const InnerTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  font-family: 'Roboto';
  letter-spacing: 0.5px;
  color: #514d4f;
`;

export const PercentInfo = styled.div`
  font-size: 24px;
  font-weight: 700;
  font-family: 'Roboto';
  letter-spacing: 1.2px;
  color: #22ab55;
`;

export const TableDiv = styled(TableContainer)`
  margin-top: 64px;
  background-color: #fff;
  border-radius: 6px;
`;
