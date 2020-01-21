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
import Badminton from  "./Hobbies/Badminton";
import Running from "./Hobbies/Running";

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
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    }
}))

const hobby_description = [
    {
        title: "Speedcubing",
        image: cube,
        content: <Speedcubing/>
    },
    {
        title: "Guitar",
        image: guitar,
        content: <Guitar/>
    },
    {
        title: "Piano",
        image: piano,
        content: <Piano/>
    },
    {
        title: "Badminton",
        image: badminton,
        content: <Badminton/>
    },
    {
        title: "Trekking",
        image: trekking,
        content: <Trekking/>
    },
    {
        title: "Running",
        image: running,
        content: <Running/>
    },
];

export default function HobbiesPage() {
    const classes = useStyles();
    const gridSize = 3;

    return (
        <div>
        <div className={classes.heading}>
            Hobbies and Interests
        </div>
            {[...Array(2)].map((a, row) =>
                <Grid container spacing={2} justify="center" className={classes.grid}>
                    {[...Array(3)].map((b, col) => {
                        let index = 3*row + col;
                        let hobby = hobby_description[index];
                        return (
                            <Grid item xs={{gridSize}}>
                                <HobbyCard {...hobby}/>
                            </Grid>
                        );
                    })}
                </Grid>
            )}
        </div>
    );
}