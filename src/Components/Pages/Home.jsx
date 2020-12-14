import React from 'react'
import Grid from '@material-ui/core/Grid';
import { LinkedinBadge } from '../HomeCompo/LinkedinBadge';
import About from '../HomeCompo/About';

const Home = () => {
    return (
        <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
        >
            <About />
            <LinkedinBadge />
        </Grid>
    )
}

export default Home;
