import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MediaCard from './usersList'


const useStyles = makeStyles(theme => ({
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
      height: 580,
    },
    chartContainer:{
        height: 'inherit',
        maxWidth: 'inherit'

    }
}));

export default function Issues() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    
    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={12}>
                        <Paper className={fixedHeightPaper} >
                            <MediaCard />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={4} lg={3}>
                        <Paper className={fixedHeightPaper} >
                            {/* <MediaCard /> */}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

           
        </main>
    );
}