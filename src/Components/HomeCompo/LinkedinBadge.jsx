import React,{ useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

}))

export const LinkedinBadge = () => {
    const classes = useStyles()

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;

        const about = document.getElementById('about')
        about.appendChild(script);

        return () => {
            about.removeChild(script);
        }
    }, []);
    return (
        <div>
            <Grid
                item
                id='about'
            >
                <div
                    className={`${classes.badge} LI-profile-badge`}
                    data-version="v1"
                    data-size="medium"
                    data-locale="en_US"
                    data-type="vertical"
                    data-theme="light"
                    data-vanity="roi-ben-ishai-9a5125199"
                >
                    <a
                        class="LI-simple-link"
                        href='https://il.linkedin.com/in/roi-ben-ishai-9a5125199?trk=profile-badge'
                    >
                        Roi Ben Ishai
                    </a>
                </div>
            </Grid>
        </div>
    )
}
