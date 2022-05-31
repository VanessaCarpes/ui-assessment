import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Grid, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { TableDiv, InnerTitle, Content, PercentInfo, Subtitle } from './styles';

export function SalesTable({ data }) {
  const getPercent = useCallback((value, total) => {
    return ((value / total) * 100).toFixed(0);
  }, []);

  return (
    <TableDiv>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell colSpan={2}>
              <Grid container spacing={1} alignItems="flex-end" style={{ paddingBottom: 16 }}>
                <Grid item>
                  <FontAwesomeIcon icon={faUpload} color="#3eb1eb" />
                </Grid>
                <Grid item>
                  <InnerTitle>Sales</InnerTitle>
                </Grid>
                <Grid item style={{ flexGrow: 1, textAlign: 'right' }}>
                  <FontAwesomeIcon icon={faInfoCircle} color="#bfbbbb" />
                </Grid>
              </Grid>
              <Content>
                You had <b>{data.uploads} uploads</b> and <b>{data.linesAttempted}</b> lines added.
              </Content>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ borderRight: '1px solid #e0e0e0', width: '50%' }}>
              <PercentInfo>{`${getPercent(data.successfulUploads, data.uploads)}%`}</PercentInfo>
              <Subtitle>UPLOAD SUCCESS</Subtitle>
            </TableCell>
            <TableCell>
              <PercentInfo>{`${getPercent(data.linesSaved, data.linesAttempted)}%`}</PercentInfo>
              <Subtitle>LINES SAVED</Subtitle>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableDiv>
  );
}

export default SalesTable;
