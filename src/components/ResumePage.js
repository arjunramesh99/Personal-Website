import resume from "./images/Resume/Resume_Latest.pdf";
import React from 'react';
import Iframe from 'react-iframe';
import {makeStyles} from "@material-ui/core";
import amber from "@material-ui/core/colors/amber";
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: amber[50],
        display: 'flex',
        height: "100vh",
    }
}));

{/* 1250x920 */}
export default function ResumePage() {
    return (
        <Iframe src={resume}
                id="resume_id"
                width="1250px"
                height="950px"
                display="initial"
                position="relative"
        />
    );
}