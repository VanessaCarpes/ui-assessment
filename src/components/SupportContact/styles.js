import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

export const Subtitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  font-family: 'Roboto';
  letter-spacing: 1.2px;
  color: #aca9a9;
`;

export const Name = styled.div`
  font-size: 14px;
  font-weight: 700;
  font-family: 'Roboto';
  letter-spacing: 0.5px;
  color: #606060;
`;

export const Content = styled.div`
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  letter-spacing: 1.2px;
  color: #606060;
`;

export const AvatarLetter = styled(Avatar)`
  background-color: #f9cf03;
  border-radius: 6px;
  color: #1a1500;
  font-weight: 700;
  font-family: 'Roboto';
  letter-spacing: 1.2px;
`;
