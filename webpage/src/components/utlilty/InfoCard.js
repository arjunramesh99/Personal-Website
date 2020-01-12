import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import orange from "@material-ui/core/colors/orange";
import amber from "@material-ui/core/colors/amber";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    desc_card: {
        position: 'relative',
        minHeight: 100,
        background: orange[50],
        padding: 10
    },
    anec_card: {
        position: 'relative',
        minHeight: 100,
        background: amber[200],
        padding: 10,
        fontWeight: "bold",
        fontFamily: "Garamond"
    },
    subheading: {
        fontFamily: 'Garamond',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textDecoration: 'underline',
        marginBottom: 5
    },
    content: {
        fontFamily: 'Garamond',
        fontSize: 17
    }
}));

export default function InfoCard(props) {
    const classes = useStyles();
    let title = props.title || (props.anec ? "Fun Facts!" : "Background");
    return (
        <Card raised className={props.anec ? classes.anec_card : classes.desc_card}>
            <Typography variant="h6" align='center' className={classes.subheading}>
                {title}
            </Typography>
            <Typography variant='body1' gutterBottom className={classes.content}>
                {props.children}
            </Typography>
        </Card>
    );
}
InfoCard.defaultProps = {
    anec: false,
}