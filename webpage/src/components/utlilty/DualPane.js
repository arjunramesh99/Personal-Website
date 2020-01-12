import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Iframe from "react-iframe";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
    divider: {
        marginTop: 10,
    },
    flex_in: {
        width: "100%",
        height: "100%"
    },
    gridSize: {
        height: 300,
    }
}));

export default function DualPane(props) {
    const classes = useStyles();
    return (
        <div>
            <Grid container justify="space-evenly" className={classes.gridSize}>
                <Grid item xs={5}>
                    {props.img1 ?
                        <img src={props.src1}
                             alt="hobby"
                             className={classes.flex_in}
                        />
                        :
                        <Iframe src={props.src1}
                                id="frame1"
                                display="initial"
                                height="300px"
                                allowFullScreen
                                className={classes.flex_in}
                        />
                    }
                </Grid>
                <Grid item xs={5}>
                    {props.img2 ?
                        <img src={props.src2}
                             alt="hobby"
                             className={classes.flex_in}
                        />
                        :
                        <Iframe src={props.src2}
                                id="frame2"
                                display="initial"
                                height="300px"
                                allowFullScreen
                                className={classes.flex_in}
                        />
                    }
                </Grid>
            </Grid>

            <Divider className={classes.divider} variant="middle"/>
        </div>
    );
}