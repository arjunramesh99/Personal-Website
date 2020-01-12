import React from 'react';
import DualPane from "../utlilty/DualPane";
import Grid from "@material-ui/core/Grid";
import InfoCard from "../utlilty/InfoCard";
import makeStyles from "@material-ui/core/styles/makeStyles";
import trek from '../images/Hobbies/Trek_Lake.jpg';

const useStyles = makeStyles(theme => ({
    link: {
        position: 'absolute',
    },
}));

export default function Badminton() {
    const classes = useStyles();
    return (
        <div>
            <DualPane img1 src1={trek} />
            <Grid style={{padding: 20}} container justify="space-evenly" spacing={3}>
                <Grid item xs={7}>
                    <InfoCard>
                        <ul>
                            <li> Started serious badminton training at the age of 11. It was my prime sport of interest. </li>
                            <li> Participated competitively in local, and state tournaments.
                                Won school tournaments and runner-up in the Cosmopolitan Club Tournament at the age of 12. </li>
                            <li> Trained in Bangalore and Chennai under intense fitness stamina and speed training. </li>
                        </ul>

                    </InfoCard>
                </Grid>
                <Grid item xs={5}>
                    <InfoCard anec>
                       Contrasting a game of Badminton to Tennis, a Badminton player
                        covers <b><i>twice</i></b> the distance
                        in <b><i>half</i></b> the time of the Tennis player!
                    </InfoCard>
                </Grid>
            </Grid>
        </div>
    );
}