import React from 'react';
import { Grid } from '@material-ui/core';
import { SalesTable } from './components/SalesTable';
import { SupportContact } from './components/SupportContact';

import './account-overview.css';

export function AccountOverview({ data }) {
  return (
    <div className="AccountOverview">
      <Grid container spacing={6} alignItems="center">
        <Grid item xl={6} lg={6} md={6} sm={12} style={{ textAlign: 'left' }}>
          <div className="Title">Account Overview</div>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} spacing={2} style={{ flexGrow: 1 }}>
          <SupportContact data={data.supportContact} />
        </Grid>
      </Grid>

      <SalesTable data={data.salesOverview} />
    </div>
  );
}

export default AccountOverview;
