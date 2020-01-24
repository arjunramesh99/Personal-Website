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
import EmailIcon from '@material-ui/icons/Email';
import HomePage from "./HomePage";
import HobbiesPage from "./HobbiesPage";
import ProjectsPage from "./ProjectsPage";
import ResumePage from "./ResumePage";
import GalleryPage from "./GalleryPage";

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
const tab_height = 90;//100;
const link_count = 4;

const tab_margin_percent = 12;
const tabs_width_percent = 14;
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
        //width: name_tab_width + 8
        width: `${tabs_width_percent}vw`
    },
    tab: {
        textTransform: 'none',
        background: 'linear-gradient(90deg, #FFF176 30%, #FFE082 90%)',
        maxWidth: 1000,
        width: `${100 - tab_margin_percent}%`,
        borderRadius: 7,
        minHeight: tab_height,
        height: tab_height,
        marginBottom: 5,
        marginLeft: `${tab_margin_percent}%`,
        boxShadow: "0 3px 5px 2px #FFB300",
        fontSize: 17,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontFamily: "Garamond",
    },
    nameButton: {
        textTransform: 'none', // Yellow[300] to Amber[200]
        background: 'linear-gradient(90deg, #FFF176 30%, #FFE082 90%)',
        minWidth: 100,
        width: "100%",
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
        border: 'none',
        borderRadius: 7,
        width: "100%",
        minHeight: link_height,
        height:  link_height,
        fontSize: 17,
        fontStyle: 'italic',
        //fontWeight: 'bold',
        fontFamily: "Garamond",
    },
    link_group: {
        position: 'absolute',
        bottom: 0,
        //width: "100%",
        width: `${100 - tab_margin_percent}%`,
        marginLeft:`${tab_margin_percent}%`,
    },
    follow_style: {
        position: 'absolute',
        bottom: link_count * link_height + 4,
        textTransform: 'none',
        //width: "100%",
        width: `${100 - tab_margin_percent}%`,
        marginLeft: `${tab_margin_percent}%`,
        border: 'none',
        minHeight: link_height,
        height: link_height,
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
        width: `${100 - tabs_width_percent}vw`
    },
    disabled: {},
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(1);
    const tabs = ['Home', 'Hobbies and Interests', 'Personal Projects', 'Resume / CV', 'Travel Gallery'];
    const tabs_content = [<HomePage/>, <HobbiesPage/>, <ProjectsPage/>, <ResumePage/>, <GalleryPage/>];
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
