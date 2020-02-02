import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'inherit',
    maxWidth: 'inherit',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },

  credit:{
    color: 'green',

  },
  account:{
    color:'red',

  },
  transfer:{
    color:'blue',

  }
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}  >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <FiberManualRecordIcon  alt="Remy Sharp" className={classes.credit} />
        </ListItemAvatar>
        <ListItemText
          primary="Credit card issue"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — My credit card doe not work for online transaction"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <FiberManualRecordIcon alt="Travis Howard"  className={classes.transfer} />
        </ListItemAvatar>
        <ListItemText
          primary="Transfer"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                John Doe
              </Typography>
              {" — Transfer $350 to Scott"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <FiberManualRecordIcon alt="Cindy Baker"  className={classes.account}  />
        </ListItemAvatar>
        <ListItemText
          primary="Account Issue"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Sandra Adams
              </Typography>
              {'I was charged twice for a transaction I did once'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <FiberManualRecordIcon  alt="Remy Sharp" className={classes.credit} />
        </ListItemAvatar>
        <ListItemText
          primary="Credit card issue"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Jose Mourinho
              </Typography>
              {" — My credit card was stolen"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <FiberManualRecordIcon alt="Travis Howard"  className={classes.transfer} />
        </ListItemAvatar>
        <ListItemText
          primary="Transfer"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Karl Noory
              </Typography>
              {" — Transfer $1500 to Abby"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <FiberManualRecordIcon alt="Cindy Baker"  className={classes.account}  />
        </ListItemAvatar>
        <ListItemText
          primary="Account Issue"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ben Simmons
              </Typography>
              {' — I want to close my bank account'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <FiberManualRecordIcon alt="Cindy Baker"  className={classes.account}  />
        </ListItemAvatar>
        <ListItemText
          primary="Account Issue"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Fred Andrews
              </Typography>
              {' — My bank account is not what it is supposed to be'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
