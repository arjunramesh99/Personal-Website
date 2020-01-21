import React from 'react';
import Grid from "@material-ui/core/Grid";
import DualPane from "../utlilty/DualPane";
import InfoCard from "../utlilty/InfoCard";

export default function Piano() {
    return (
        <div>
            <DualPane src1="https://www.youtube.com/embed/t8JY5fZ5b4A"
                      src2="https://www.youtube.com/embed/EZlQcX_DsuE"/>
            <Grid style={{padding: 20}} container justify="space-evenly" spacing={3}>
                <Grid item xs={6}>
                    <InfoCard>
                        <ul>
                            <li> Started learning at age of 13.</li>
                            <li> Trained in <i>Classical Music</i> for 6 years in Chennai.
                                Completed <b>5</b> grades under the <i>Trinity College, London</i>.
                            </li>
                            <li> Today, I have expanded my interest to popular movie themes, <i>jazz</i>,
                                and <i>rock</i> music.</li>
                        </ul>
                    </InfoCard>
                </Grid>
                <Grid item xs={6}>
                    <InfoCard anec>
                        I was once recorded playing the piano at the campus dorms for a film student's project!
                        I've met people with interesting backgrounds and experience in this room!
                        <br/><br/> My favourite pieces to play include:
                        <ul>
                            <li><i> La La Land: Epilogue</i></li>
                            <li><i> Firth of Fifth (Genesis)</i></li>
                        </ul>
                    </InfoCard>
                </Grid>
            </Grid>
        </div>
    );
}

