import React from 'react';
import ReactContactForm from 'react-mail-form';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    contact: {
        minWidth: 1000,
        minHeight: 1000,
    }
}));

export default function HomePage() {
    const classes = useStyles();
    return (
        <ReactContactForm className={classes.contact} to="arjun99ramesh@gmail.com" />
    );
}