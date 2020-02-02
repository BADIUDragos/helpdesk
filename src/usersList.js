import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 140,
  },
  image:{
      width: 'inherit',
      height: 'inherit',
      alignContent: 'center'
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
      <Grid >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}>
          <PersonIcon className={classes.image}/>
          </CardMedia >
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           John Doe
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Chequing Account: $350
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
    </Grid>
  );
}
