import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Iframe from "react-iframe";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    videos: {
        justifyContent: 'space-evenly'
    }
}));

export default function Piano() {
    const classes = useStyles();
    return (
        <Grid container justify="space-evenly">
            <Grid item xs={5}>
                <Iframe url="https://www.youtube.com/embed/t8JY5fZ5b4A"
                        id="Piano_vid1"
                        display="initial"
                        height="350px"
                        allowFullScreen
                />
            </Grid>
            <Grid item xs={5}>
                <Iframe url="https://www.youtube.com/embed/EZlQcX_DsuE"
                        id="Piano_vid2"
                        display="initial"
                        height="350px"
                        allowFullScreen
                />
            </Grid>
        </Grid>
    );
}

