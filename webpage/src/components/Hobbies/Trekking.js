import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Iframe from "react-iframe";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import DualPane from "../utlilty/DualPane";
import InfoCard from "../utlilty/InfoCard";
import trek_lake from "../images/Hobbies/Trek_Lake.jpg";
import trek_finish from "../images/Hobbies/Trek_Finish.jpg";

const useStyles = makeStyles(theme => ({
    videos: {
        justifyContent: 'space-evenly'
    },
    grid_text: {
        padding: 20
    }
}));

export default function Trekking() {
    const classes = useStyles();
    return (
        <div>
            <DualPane src1="https://www.youtube.com/embed/pvla0e-ooK4"
                      img2 src2={trek_finish}/>
            <Grid className={classes.grid_text} container justify="space-evenly" spacing={3}>
                <Grid item xs={6}>
                    <InfoCard>
                        <ul>
                            <li> From a young age, I loved mountains. Stemmed from my dad's passion for it,
                                and he would often take me along. </li>
                            <li> Have trekked around the world, including
                                India, Australia, and Nepal. </li>
                            <li> My largest trek was the <i>Annapurna Circuit</i> in the <b>Himalayas</b> (Nepal) at the age of 14.</li>
                        </ul>
                    </InfoCard>
                </Grid>
                <Grid item xs={6}>
                    <InfoCard anec>
                        The <i>Annapurna Circuit</i> was a mind-blowing experience!
                        We trekked for 10 days, starting from low-altitude greenery to snow-capped peaks,
                        covering a distance of <b>180 km</b> and a peak height of <b>5416 m</b>.
                        <br/> The last ascent (<i>Thorung-La</i> peak) was a 900m climb and a 1200m drop in one day!
                        We started at 3 am, in the pitch-darkness and freezing cold, and ended at 4 pm.
                    </InfoCard>
                </Grid>
            </Grid>
        </div>
    );
}

