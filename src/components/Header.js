import React, { useContext } from 'react';
import { ThemeButton } from "../context/GlobalState";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  color: {
    backgroundColor: 'hsl(227deg 22% 20%)',
  },
}));

export default function Header() {
  const classes = useStyles();
  const Light = useContext(ThemeButton);
  const themeHandle = () => {
    Light[1](!Light[0]);
    var element = document.body;
    element.classList.toggle("dark-mode");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={Light[0]? '': classes.color}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Covid-19 Tracker
            <button className="btn" onClick={() => { themeHandle() }}>{Light[0] ? <Brightness4Icon /> : <Brightness7Icon />}</button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}