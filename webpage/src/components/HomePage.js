import React, {useState} from 'react';
import ReactContactForm from 'react-mail-form';
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import DP from "./images/Home/DP.jpg";
import lake from './images/Hobbies/Trek_Lake.jpg';
import finish from './images/Hobbies/Trek_Finish.jpg';
import InfoCard from "./utlilty/InfoCard";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Alert from '@material-ui/lab/Alert';
import Snackbar from "@material-ui/core/Snackbar";
import emailjs from 'emailjs-com';
import MessageCard from "./utlilty/MessageCard";
import Slideshow from "./utlilty/Slideshow";

const useStyles = makeStyles(theme => ({
    contact: {
        minWidth: 1000,
        minHeight: 1000,
    },
    dp: {
        width: "100%",
        //height: "100%",
        borderRadius: 50,
    },
    home: {
        padding: 20,
    },
    bio: {
        padding: 20,
        paddingLeft: 50,
        paddingRight: 50,
    },
    connect: {
        fontSize: 28,
        fontFamily: "Garamond",
        fontWeight: 'bold',
        textAlign: 'center',
    },
    connect_card: {
        marginLeft: 60,
        marginRight: 60,
        marginTop: 40,
        padding: 30,
        background: 'white',
    },
    name: {
        marginBottom: 20,
        fontSize: 28,
        fontWeight: 'bold'
    },
    input: {
        marginTop: 20,
        marginLeft: 40,
        minWidth: 300,
        width: 300,
    },
    name_input: {
        marginTop: 20,
        marginLeft: 40,
        minWidth: 200,
        width: 200,
    },
    input2: {
        marginTop: 20,
        marginLeft: 40,
        minWidth: 400,
        width: 450,
    },
    send_button: {
        marginTop: 20,
        marginLeft: '40%',
    },
    bgd_img: {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        opacity: 0.2
    },
    tab_panel: {
        position: 'relative'
    }
}));

const slides = [
    DP,
    lake,
    finish
];

export default function HomePage() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [send, setSend] = useState(false);
    const [name, setName] = useState('');

    const handleSendClick = () => {
        if (!message) {
            return;
        }
        let templateParams = {
            from_name: (name || "Anonymous"),
            from_email: (email || "anon@anonymous.com"),
            to_name: "arjun99ramesh@gmail.com",
            message_html: message,
        }

        {/* EmailJS send */
        }
        emailjs.send('gmail', 'template_9NtASnHN',
            templateParams, 'user_T5p9A23J1pcu9YJEMjXdw')
            .then(function (response) {
                console.log("Success");
                setSend(true);
            }, function (err) {
                console.log("Failed");
            });

        {/* Reset fields */
        }
        setEmail('');
        setMessage('');
        setName('');
    }

    const handleCloseAlert = () => {
        setSend(false);
    }

    return (
        <div className={classes.tab_panel}>
            <Grid container spacing={5} justify="flex-end" className={classes.home}>
                <Grid item xs={6}>
                    <Slideshow slides={slides}/>
                    {/*<img className={classes.dp} src={DP} alt="Display pic"/>*/}
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <Typography align='center' className={classes.name}>
                            Arjun Ramesh
                        </Typography>
                        <InfoCard title="Bio" className={classes.bio}>
                            An essay is, generally, a piece of writing that gives the author's own argument — but the
                            definition
                            is vague, overlapping with those of a paper, an article, a pamphlet, and a short story.
                            Essays
                            have
                            traditionally been sub-classified as formal and informal. Formal essays are characterized by
                            "serious purpose, dignity, logical organization, length," whereas the informal essay is
                            characterized by "the personal element (self-revelation, individual tastes and experiences,
                            confidential manner), humor, graceful style, rambling structure, unconventionality or
                            novelty of
                            theme," etc.[1]

                            Essays are commonly used as literary criticism, political manifestos, learned arguments,
                            observations of daily life, recollections, and reflections of the author. Almost all modern
                            essays
                            are written in prose, but works in verse have been dubbed essays (e.g., Alexander Pope's An
                            Essay on
                            Criticism and An Essay on Man). While brevity usually defines an essay, voluminous works
                            like
                            John
                            Locke's An Essay Concerning Human Understanding and Thomas Malthus's An Essay on the
                            Principle
                            of
                            Population are counterexamples.
                        </InfoCard>

                        <Card raised className={classes.connect_card}>
                            <div className={classes.connect}>
                                Send me a message!
                            </div>
                            <div>
                                <TextField className={classes.input}
                                           id="emailid"
                                           label="Email Address"
                                           variant="outlined"
                                           placeholder="eg: abc@example.com"
                                           size="small"
                                           value={email}
                                           onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                            <div>
                                <TextField className={classes.input}
                                           id="fnid"
                                           label="Name"
                                           variant="outlined"
                                           placeholder="eg: John"
                                           size="small"
                                           value={name}
                                           onChange={(event) => setName(event.target.value)}
                                />
                                {/*<TextField className={classes.name_input}
                                       id="lnid"
                                       label="Last Name"
                                       variant="outlined"
                                       placeholder="Smith"
                                       size="small"
                            />*/}
                            </div>
                            <div>
                                <TextField className={classes.input2}
                                           id="messageid"
                                           label="Message"
                                           variant="outlined"
                                           multiline
                                           rows={3}
                                           placeholder="My name is abc, and I want to connect with you!"
                                           size="small"
                                           required
                                           value={message}
                                           onChange={(event) => setMessage(event.target.value)}
                                />
                            </div>
                            <Button className={classes.send_button}
                                    variant="contained"
                                    endIcon={<MailOutlineIcon/>}
                                    onClick={handleSendClick}
                            >
                                Send
                            </Button>
                        </Card>

                    </div>
                </Grid>

            </Grid>
            <Snackbar open={send}
                      autoHideDuration={5000}
                      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                //onClose={handleCloseAlert}
            >
                <Alert variant="filled" severity="success" onClose={handleCloseAlert}>
                    Message sent!
                </Alert>
            </Snackbar>
        </div>
    );
}