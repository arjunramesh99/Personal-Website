import React from 'react';
import Grid from "@material-ui/core/Grid";
import DualPane from "../utlilty/DualPane";
import InfoCard from "../utlilty/InfoCard";


export default function Guitar() {
    return (
        <div>
            <DualPane src1="https://www.youtube.com/embed/bwVirkXOSz4"
                      src2="https://www.youtube.com/embed/shiSCyZfQlU"
            />

            <Grid style={{padding: 20}} container justify="space-evenly" spacing={3}>
                <Grid item xs={6}>
                    <InfoCard>
                        <ul>
                            <li> Started learning at age of 12.</li>
                            <li> Mainly self-taught (acoustic and electric), with initial guidance from my older
                                brother.
                            </li>
                            <li> Stemmed from an interest in <i>Classic Rock</i>, but have now
                                taken interest in other areas like <i> Gypsy Jazz, 70s Rock, and Blues </i></li>
                        </ul>
                    </InfoCard>
                </Grid>
                <Grid item xs={6}>
                    <InfoCard anec>
                        I am primarily a right-hander but play a <i><b>left-handed guitar</b></i>!
                        My older brother was a left-hander and I subconsciously picked up his guitar as a lefty for the first time!
                        <br/><br/> My favourite pieces to play include:
                        <ul>
                            <li> <i>Minor Swing (Django Reinhart) </i></li>
                            <li> <i>Bistro Fada (Stephane Wrembel) </i></li>
                        </ul>
                    </InfoCard>
                </Grid>
            </Grid>
        </div>
    );
}