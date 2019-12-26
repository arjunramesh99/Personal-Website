import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import resume from '../images/Resume.jpg';
import FileViewer from "react-file-viewer";
import HomePage from "./HomePage";
import HobbiesPage from "./HobbiesPage";
import ProjectsPage from "./ProjectsPage";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224*5,
    },
    tabs: {
        //background: 'linear-gradient(90deg, #FFFDE7 30%, #FFFDE7 90%)',
        borderRight: `5px solid ${theme.palette.divider}`,
    },
    tab: {
        textTransform: 'none',
        background: 'linear-gradient(90deg, #FFFDE7 30%, #FFFDE7 90%)',
        minWidth: 270,
        width: 270,
        minHeight: 100,
        height:  100,
        marginBottom: 2,
        marginLeft: 30,
        fontSize: 17,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontFamily: "Garamond",
    },
    nameTab: {
        textTransform: 'none',
        background: 'linear-gradient(90deg, #FFFDE7 30%, #FFFDE7 90%)',
        minWidth: 300,
        width: 300,
        minHeight: 100,
        height:  100,
        marginBottom: 5,
        fontSize: 22,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontFamily: 'Garamond'
    }
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const resumepath = '../images/Resume_Latest.pdf';
    const resumetype = 'pdf';
    const tabs = ['Home', 'Hobbies and Interest', 'Personal Projects', 'Resume / CV'];
    const tabs_content = [<HomePage/>, <HobbiesPage/>, <ProjectsPage/>, <img src={resume} alt="Resume" />];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab className={classes.nameTab} label="Arjun Ramesh" {...a11yProps(0)} />
                {/* Render Tabs */}
                {tabs.map((name, index) =>
                    <Tab className={classes.tab} label={name} {...a11yProps({index})}/>
                )}
            </Tabs>

            {tabs_content.map((page_component, index) =>
                <TabPanel value={value} index={index + 1}> {page_component} </TabPanel>
            )}
        </div>
    );
}
