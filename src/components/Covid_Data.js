import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ThemeButton } from "../context/GlobalState";
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';
import { DoughnutData } from "./DoughnutData";
import { LineData } from "./LineData";
import { CountrySelector } from './CountrySelector';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '5px 10px',
  },

}));


export default function CovidData() {
  const classes = useStyles();
  const [globalData, setGlobalData] = useState();
  const [count, setcount] = useState('Global');
  const Light = useContext(ThemeButton);

  if (count !== 'Global') {
    for (var i = 0; globalData && i < globalData.length; i++) {
      if (globalData[i].country === count) {
        globalData &&
          setcount(globalData[i]);
        break;
      }
    }
  }

  return (
    <div>
      <CountrySelector setcount={setcount} Light={Light} />
      <div className={`${classes.root} top`}>
        <Grid container spacing={0}>
          <Grid item xs>
            <Paper className={`${classes.paper} style3`}>
              <div >
                <Typography variant="h6" gutterBottom >
                  <NumberFormat value={count && count.cases} displayType={'text'} thousandSeparator={true} />
                </Typography>
                <Typography variant="subtitle2" gutterBottom style={{ fontWeight: 'bold' }}>
                  Total Cases
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={`${classes.paper} style`}>
              <div >
                <Typography variant="h6" gutterBottom >
                  <NumberFormat value={count && count.active} displayType={'text'} thousandSeparator={true} />
                </Typography>
                <Typography variant="subtitle2" gutterBottom style={{ fontWeight: 'bold' }}>
                  Active
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={`${classes.paper} style1`}>
              <div >
                <Typography variant="h6" gutterBottom >
                  <NumberFormat value={count && count.deaths} displayType={'text'} thousandSeparator={true} />
                </Typography>
                <Typography variant="subtitle2" gutterBottom style={{ fontWeight: 'bold' }}>
                  Dead
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={`${classes.paper} style2`}>
              <div >
                <Typography variant="h6" gutterBottom >
                  <NumberFormat value={count && count.recovered} displayType={'text'} thousandSeparator={true} />
                </Typography>
                <Typography variant="subtitle2" gutterBottom style={{ fontWeight: 'bold' }}>
                  Recovered
                </Typography>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <DoughnutData count={count} Light={Light} setGlobalData={setGlobalData} setcount={setcount} />
      <LineData count={count} />
    </div>
  );
}