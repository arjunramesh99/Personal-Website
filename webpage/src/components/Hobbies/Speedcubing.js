import React from 'react';
import Iframe from "react-iframe";
import DualPane from "../utlilty/DualPane";
import Grid from "@material-ui/core/Grid";
import InfoCard from "../utlilty/InfoCard";
import Button from "@material-ui/core/Button";
import PersonIcon from '@material-ui/icons/Person';
import makeStyles from "@material-ui/core/styles/makeStyles";
import lime from "@material-ui/core/colors/lime";

const useStyles = makeStyles(theme => ({
    link: {
        position: 'absolute',
        right: '5%',
        bottom: '10%',
        textTransform: 'none',
        background: lime[600],
        border: 'none',
        borderRadius: 7,
        minWidth: 50,//270 + 2*nameMargin,
        width: 90,
        minHeight: 50,
        height: 70,
        //marginLeft: 30,
        //fontSize: 15,
        //fontStyle: 'italic',
        //fontWeight: 'bold',
        //fontFamily: "Garamond",
    },
}));

export default function Speedcubing() {
    const classes = useStyles();
    return (
        <div>
            <DualPane src1="https://www.youtube.com/embed/O0uQafYKUfs"
                      src2="https://www.youtube.com/embed/O0uQafYKUfs"
            />
            <Grid style={{padding: 20}} container justify="space-evenly" spacing={3}>
                <Grid item xs={7}>
                    <InfoCard>
                        <ul>
                            <li> I have always loved solving puzzles. Started serious cubing at the age of 14.</li>
                            <li> Developed a lot of my <i>own algorithms</i> for enhanced memorization and solving.
                            </li>
                            <li> <i>Unofficial</i> personal records:
                                <ul>
                                    <li> 3x3: <i><b>10.2 s</b></i></li>
                                    <li> 3x3 One-Handed: <i><b>19.5 s</b></i></li>
                                    <li> 3x3 Blindfolded: <i><b>1:58 m</b></i></li>
                                </ul>
                            </li>
                            <Button className={classes.link} href="https://www.worldcubeassociation.org/persons/2014RAME04"  startIcon={<PersonIcon/>}>
                                Official Profile
                            </Button>
                        </ul>

                    </InfoCard>
                </Grid>
                <Grid item xs={5}>
                    <InfoCard anec>
                        I watched my friend, <i>Angelo Zhang</i>, from the Cubing Club at UT Austin
                        set the world record for 3x3 Blindfolded with a 22.36 sec average!
                        <br/> I also judged a competitor solve 19 cubes blindfolded in 3x3 multiblind at nationals!
                    </InfoCard>
                </Grid>
            </Grid>
        </div>
    );
}