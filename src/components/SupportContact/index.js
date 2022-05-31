import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Grid } from '@material-ui/core';
import { Subtitle, AvatarLetter, Name, Content } from './styles';

export function SupportContact({ data }) {
  return (
    <Grid container spacing={2}>
      <Grid item xl={6} lg={6} md={12} sm={12} style={{ textAlign: 'left' }}>
        <Subtitle>YOUR FEEFO SUPPORT CONTACT</Subtitle>
      </Grid>
      <Grid container direction="row" spacing={2} style={{ marginLeft: 0 }}>
        <Grid item>
          <AvatarLetter variant="square">{data.name.charAt(0)}</AvatarLetter>
        </Grid>
        <Grid item container style={{ width: 'calc(100% - 60px)', flexGrow: 1 }}>
          <Grid item>
            <Name>{data.name}</Name>
          </Grid>
          <Grid item container spacing={1} alignItems="center">
            <Grid item>
              <FontAwesomeIcon icon={faEnvelope} color="#606060" />
            </Grid>
            <Grid item>
              <Content>{data.email}</Content>
            </Grid>
            <Grid item>
              <Content>{data.phone}</Content>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SupportContact;
