import React from 'react';
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import HobbyCard from "./utlilty/HobbyCard";

import cube from "./images/Hobbies/Cubing_DP.jpg";
import piano from "./images/Hobbies/Piano_DP.jpg";
import guitar from "./images/Hobbies/Guitar_DP.jpg";
import badminton from "./images/Hobbies/Badminton_DP.jpg";
import trekking from "./images/Hobbies/Trekking_DP.jpg";
import running from "./images/Hobbies/Running_DP.jpg";
import Speedcubing from "./Hobbies/Speedcubing";
import Guitar from "./Hobbies/Guitar";
import Piano from "./Hobbies/Piano";
import Trekking from "./Hobbies/Trekking";

const DP_side = 355;

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    grid: {
        marginTop: 20,
        marginBottom: 20,
        paddingRight: 50,
        // marginLeft: 10,
    }
}))

const hobby_description = [
    {
        title: "RecycleMe",
        image: cube,
        content: <Speedcubing/>
    },
    {
        title: "Organizing Chairs",
        image: guitar,
        content: <Guitar/>,
        lines: 2
    },
    {
        title: "Piano",
        image: piano,
        content: <Piano/>
    },
    {
        title: "Badminton",
        image: badminton,
        content: 3
    },
    {
        title: "Trekking",
        image: trekking,
        content: <Trekking/>
    },
    {
        title: "Running",
        image: running,
        content: 5
    },
];

export default function ProjectsPage() {
    const classes = useStyles();
    const gridSize = 3;

    return (
        <div>
            <div>
                <b>Under Development</b>
            </div>
            <Grid container justify="center" spacing={2} className={classes.grid} />
            {[...Array(2)].map((a, row) =>
                <Grid container justify="center" spacing={2} className={classes.grid}>
                    {[...Array(3)].map((b, col) => {
                        let index = 3*row + col;
                        let hobby = hobby_description[index];
                        return (
                            <Grid item xs={{gridSize}}>
                                <HobbyCard large {...hobby}/>
                            </Grid>
                        );
                    })}
                </Grid>
            )}
        </div>
    );
}