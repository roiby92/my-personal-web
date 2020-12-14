import React from 'react'
import NavBar from './NavBar'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        marginTop:'65px',
        textAlign: 'center'
    }
}));

const Layout = (props) => {
    const classes = useStyles();

    return (
        <div>
            <NavBar />
            <main className={classes.content}>
                    {props.children}
            </main>
        </div>
    )
}

export default Layout
