import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    about: {
        flexWrap: 'wrap',
        marginLeft: "20px",
        '& > *': {
            width: "400px",
            height: "400px",
        },
    },
}));

const About = () => {
    const classes = useStyles();

    return (
        <Grid item className={classes.about}>
            <Paper elevation={3} >
                hello my name is roi ben ishai and im 28 yers old
            </Paper>
        </Grid>
    );
}
export default About;


