import {FlippingCard, FlippingCardBack, FlippingCardFront} from "react-ui-cards";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import grey from "@material-ui/core/colors/grey";
import amber from "@material-ui/core/colors/amber";
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';

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
        transition: '0.3s',
        '&:hover': {
            background: amber[100],
            height: DP_side * 2,
            minWidth: DP_side * 2, //+ 30,
            borderRadius: 10,
            paddingTop: 10
        }
    },
    flip_card_large: {
        '&:hover': {
            background: amber[100],
            height: "85vh",
            minWidth: DP_side * 2,// + 30,
            borderRadius: 10,
            paddingTop: 10
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
        //width: 320,
        fontSize: 52,
        color: amber[50],
        fontWeight: 'bold',
        fontFamily: 'Garamond',
        top: "40%",
        width: "100%",
        textAlign: 'center'
    },
    grid: {
        marginTop: 20,
        marginBottom: 20,
        // marginLeft: 10,
    },
    back_title: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: "Garamond",
        fontWeight: 'bold',
        //color: amber[50]
    },
    divider: {
        marginBottom: 20
    }
}))


export default function HobbyCard(props) {
    const classes = useStyles();
    //let title_length = 160 - 11*props.title.length;
    let line_space = (props.lines ? (50 - 9*props.lines) : 40);
    return (
        <FlippingCard className={clsx(
            classes.flip_card, {
            [classes.flip_card_large] : props.large
        })}>
            <FlippingCardFront>
                <Card className={classes.card}>
                    <CardMedia className={classes.media}
                               title={props.title}
                               image={props.image}
                    />
                </Card>
                <Typography className={classes.title} style={{top: `${line_space}%`}}>
                    {props.title}
                </Typography>
            </FlippingCardFront>
            <FlippingCardBack>
                <div className={classes.back_title}>
                    {props.title}
                </div>
                <Divider className={classes.divider} variant="middle" />
                {props.content}
            </FlippingCardBack>
        </FlippingCard>
    )
}