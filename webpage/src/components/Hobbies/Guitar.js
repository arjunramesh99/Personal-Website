import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Iframe from "react-iframe";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    videos: {
        justifyContent: 'space-evenly'
    },
    content: {
        fontSize: 18,
        fontFamily: "Garamond"
    }
}));

export default function Guitar() {
    const classes = useStyles();
    return (
        <div>
            <Grid container justify="space-evenly">
                <Grid item xs={5}>
                    <Iframe url="https://www.youtube.com/embed/bwVirkXOSz4"
                            id="Guitar_vid1"
                            display="initial"
                            height="350px"
                            allowFullScreen
                    />
                </Grid>
                <Grid item xs={5}>
                    <Iframe url="https://www.youtube.com/embed/shiSCyZfQlU"
                            id="Guitar_vid2"
                            display="initial"
                            height="350px"
                            allowFullScreen
                    />
                </Grid>
            </Grid>
            <ul className={classes.content}>
                <li> Learnt for 5 years.</li>
                <li> Also did this</li>
                <li> And that</li>
            </ul>
        </div>
    );
}