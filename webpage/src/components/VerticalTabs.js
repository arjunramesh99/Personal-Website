import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import HomePage from "./HomePage";
import HobbiesPage from "./HobbiesPage";
import ProjectsPage from "./ProjectsPage";
import ResumePage from "./ResumePage";

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

const nameMargin = 0;
const link_height = 40;
const name_tab_height = 150;
const tab_height = 100;
const name_tab_width = 300; //
const tab_width = 270 + 2*nameMargin;
const link_count = 4;
// 224*4.3
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: amber[50],
        display: 'flex',
        height: "100vh",
    },
    tabs: {
        position: 'static',
        borderRight: `5px solid ${theme.palette.divider}`,
        background: amber[50],
        overflow: "hidden",
        width: name_tab_width + 8
        //width: "16vw"
    },
    tab: {
        textTransform: 'none',
        background: 'linear-gradient(90deg, #FFF176 30%, #FFE082 90%)',
        minWidth: tab_width,//270 + 2*nameMargin,
        borderRadius: 7,
        minHeight: tab_height,
        height: tab_height,
        marginBottom: 5,
        marginLeft: 30,
        boxShadow: "0 3px 5px 2px #FFB300",
        fontSize: 17,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontFamily: "Garamond",
    },
    nameButton: {
        textTransform: 'none', // Yellow[300] to Amber[200]
        background: 'linear-gradient(90deg, #FFF176 30%, #FFE082 90%)',
        minWidth: name_tab_width,
        width: name_tab_width,
        //borderRadius: 20,
        minHeight: name_tab_height,
        height:  name_tab_height,
        margin: nameMargin,
        marginBottom: 15,
        fontSize: 27,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontFamily: 'Garamond',
        "&$disabled": {
            color: "black"
        }
    },
    link: {
        textTransform: 'none',
        background: 'linear-gradient(90deg, #FFF176 30%, #FFE082 90%)',
        minWidth: tab_width,//270 + 2*nameMargin,
        border: 'none',
        borderRadius: 7,
        width: tab_width,
        minHeight: link_height,
        height:  link_height,
        marginLeft: 30,
        fontSize: 17,
        fontStyle: 'italic',
        //fontWeight: 'bold',
        fontFamily: "Garamond",
    },
    link_group: {
        position: 'absolute',
        bottom: 0
    },
    follow_style: {
        position: 'absolute',
        bottom: link_count * link_height + 4,
        textTransform: 'none',
        minWidth: tab_width,//270 + 2 * nameMargin,
        width: tab_width,
        border: 'none',
        minHeight: link_height,
        height: link_height,
        marginLeft: 30,
        fontSize: 21,
        fontStyle: 'italic',
        //fontWeight: 'bold',
        fontFamily: "Garamond",
        "&$disabled": {
            color: "black"
        }
    },
    tabPanel: {
        overflowY: "auto",
        width: "85vw"
    },
    disabled: {},
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(2);
    const tabs = ['Home', 'Hobbies and Interests', 'Personal Projects', 'Resume / CV'];
    const tabs_content = [<HomePage/>, <HobbiesPage/>, <ProjectsPage/>, <ResumePage/>];
    const links_labels = ['Github', 'LinkedIn', 'Facebook', 'Youtube'];
    const links_icons = [<GitHubIcon/>, <LinkedInIcon/>, <FacebookIcon/>, <YouTubeIcon/>]
    const links_url = ['https://github.com/arjunramesh99', 'https://www.linkedin.com/in/ajramesh/', 'https://www.facebook.com/arjun.ramesh.9066?ref=bookmarks', 'https://www.youtube.com/channel/UCQLPzl1LHeF25W3SiKSAqGQ?view_as=subscriber'];


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
                aria-label="Vertical tabs"
                className={classes.tabs}
            >

                {/* Render Tabs */}
                <Button classes={{root: classes.nameButton, disabled: classes.disabled, label: classes.label}} disabled>
                    Arjun Ramesh
                </Button>
                {tabs.map((name, index) =>
                    <Tab className={classes.tab} label={name} {...a11yProps({index})}/>
                )}

                <Button disabled classes={{root: classes.follow_style, disabled: classes.disabled}}> Follow Me! </Button>
                {/* Render Links */}
                <ButtonGroup className={classes.link_group} orientation="vertical" aria-label="vertical outlined primary button group">
                    {links_labels.map((name, index) =>
                        <Button href={links_url[index]} className={classes.link} startIcon={links_icons[index]}>
                            {name}
                        </Button>
                    )}
                </ButtonGroup>


            </Tabs>
            {/* Render content for the page */}
            {tabs_content.map((page_component, index) =>
                <TabPanel className={classes.tabPanel} value={value} index={index + 1}> {page_component} </TabPanel>
            )}
        </div>
    );
}
