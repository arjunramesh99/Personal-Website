import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Slide, Zoom, Fade} from 'react-slideshow-image';

const useStyles = makeStyles(theme => ({
    dp: {
        position: "relative",
        width: "100%",
        padding: 30,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 30
    }
}));

const properties = {
    duration: 5000,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    scale: 0.3,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

export default function Slideshow(props) {
    const classes = useStyles();
    return (
        <Zoom className={classes.dp} {...properties}>
            {props.slides.map((image, index) =>
                <img className={classes.image} src={image} alt="Slide ${index}"/>
            )}
        </Zoom>
    );
}