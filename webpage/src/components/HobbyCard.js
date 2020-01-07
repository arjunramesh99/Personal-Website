import {FlippingCard, FlippingCardBack, FlippingCardFront} from "react-ui-cards";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import grey from "@material-ui/core/colors/grey";
import amber from "@material-ui/core/colors/amber";

const DP_side = 355;

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    card: {
        minHeight: 30,
        height: DP_side,
        background: grey[800]//'linear-gradient(45deg, #FFECB3, #FFE082)' //amber[100]
    },
    flip_card: {
        position: 'relative',
        minHeight: 3,
        height: DP_side,
        minWidth: DP_side,
        width: DP_side,
        marginRight: 0,
        '&:hover': {
            background: grey[100],
            height: DP_side * 2,
            minWidth: DP_side * 2 + 30,
        }
    },
    link_bar: {
        //minWidth: 700,
        backgroundColor: amber[300],
        minHeight: 40,
        height: 40,
        position: 'relative'
    },
    media: {
        minWidth: DP_side,
        width: DP_side,
        minHeight: DP_side,
        height: DP_side,
        opacity: 0.3
    },
    title: {
        position: 'absolute',
        fontSize: 48,
        color: amber[50],
        fontWeight: 'bold',
        fontFamily: 'Garamond',
        top: "40%"
    },
    grid: {
        marginTop: 20,
        marginBottom: 20,
        // marginLeft: 10,
    }
}))


export default function HobbyCard() {
    const classes = useStyles();
    return (
        <FlippingCard className={classes.flip_card}>
            <FlippingCardFront>
                <Card className={classes.card}>
                    <CardMedia className={classes.media}
                               title="SpeedCubing"
                               image={require("../images/Cubing/Cubing_DP.jpg")}
                    />
                </Card>
                <Typography className={classes.title} style={{left: "15%"}}>
                    Speedcubing
                </Typography>
            </FlippingCardFront>
            <FlippingCardBack>
                Back content
            </FlippingCardBack>
        </FlippingCard>
    )
}