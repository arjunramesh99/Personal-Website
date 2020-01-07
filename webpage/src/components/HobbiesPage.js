import React from 'react';
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import HobbyCard from "./HobbyCard";

const DP_side = 355;

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    grid: {
        marginTop: 20,
        marginBottom: 20,
        // marginLeft: 10,
    }
}))

export default function HobbiesPage() {
    const classes = useStyles();
    const gridSize = 3;

    return (
        <div>
            {[...Array(2)].map((c, d) =>
                <Grid container spacing={2} className={classes.grid}>
                    {[...Array(3)].map((a, b) =>
                        <Grid item xs={{gridSize}}>
                            <HobbyCard />
                        </Grid>
                    )}
                </Grid>
            )}
        </div>
    );
}