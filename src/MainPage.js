import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
// import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import rbc from './rbc.png'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

//css import
import './mainpage.css';

import { mainListItems, secondaryListItems, applicationContent } from './listItems';

//contents imports
import Issues from './issueContent';
import usersContent from './usersContent';
// import IntegrationContent from './integration';

const drawerWidth = 240;
 
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    // paddingRight: '100px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));
 
export default function Home() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <BrowserRouter>
        {/* Navbar code snippet */}
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar  id='toolBar' className={classes.toolbar}>
            <IconButton edge="start"  color="inherit"  aria-label="open drawer"  onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Switch>

              <Route exact path="/issues" >
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title} >
                  Issues
                </Typography>
              </Route>
              <Route exact path="/users">
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                  Users
                </Typography>
              </Route>
              <Route exact path="/integration">
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                  Integrations
                </Typography>
              </Route>
            </Switch>
            <IconButton color="inherit">
              <ExitToAppOutlinedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          classes={{paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <img src={rbc} className="mainPage-logo" alt="Menu" />
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          {/* <List>{secondaryListItems}</List> */}
        </Drawer>
        <Switch>
          <Route exact path={["","/", "/home","/issues"]} component={Issues} />} />
          <Route exact path="/users" component={usersContent} />} />
          {/* <Route exact path="/integration" component={IntegrationContent} />} /> */}
          {/* // Add any other routes you want here */}
        </Switch>
        
      </BrowserRouter>
    </div>
  );      


}
