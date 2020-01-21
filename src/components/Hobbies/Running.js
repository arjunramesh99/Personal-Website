import React from 'react';
import Iframe from "react-iframe";
import DualPane from "../utlilty/DualPane";
import Grid from "@material-ui/core/Grid";
import InfoCard from "../utlilty/InfoCard";
import Button from "@material-ui/core/Button";
import PersonIcon from '@material-ui/icons/Person';
import makeStyles from "@material-ui/core/styles/makeStyles";
import lime from "@material-ui/core/colors/lime";
import trek from '../images/Hobbies/Trek_Lake.jpg';

const useStyles = makeStyles(theme => ({
    link: {
        position: 'absolute',
    },
    img: {
        float: "left",
        width: "50%",
        height: "50%",
        marginLeft: 25,
        marginRight: 25
    }
}));

export default function Running() {
    const classes = useStyles();
    return (
        <div>
            <img className={classes.img} src={trek} alt="Badminton" />
            <Grid style={{padding: 20}} container justify="space-evenly" spacing={3}>
                <Grid item xs={7}>
                    <InfoCard>
                        <ul>
                            <li> Started running long-distance (<b>10K</b>) with my dad since the age of 10. </li>
                            <li> Won several athletics medals in <i>100m</i>, <i>200m</i>, and long jump at sports days at high-school sports day.
                                I was particularly strong at long distances like <i>1500m</i>.
                            </li>
                            <li> Ran a <b>sub-50</b> 10K (49:35) at Wipro Marathon 2014, Chennai, at the age of 15.
                                Placed <b><i>45</i></b> out of 5192 runners for the event.
                            </li>
                        </ul>

                    </InfoCard>
                </Grid>
                <Grid item xs={5}>
                    <InfoCard anec>
                        My first unofficial 10K was done at the age of 11.
                        My first <i><b>official</b></i> one was done in 2013 at Auroville at the age of 12.
                        I was initially not allowed to register because I had to be
                        <i>over the age of 13</i> to participate for safety reasons!
                        But with certain amount of assurance from my dad, I finally completed it in <i>53</i> minutes!
                    </InfoCard>
                </Grid>
            </Grid>
        </div>
    );
}