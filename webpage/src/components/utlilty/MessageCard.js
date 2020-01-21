import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles(theme => ({
    connect: {
        fontSize: 28,
        fontFamily: "Garamond",
        fontWeight: 'bold',
        textAlign: 'center',
    },
    connect_card: {
        padding: 30,
        background: 'white',
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

}));

export default function MessageCard(props) {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [send, setSend] = useState(false);
    const [name, setName] = useState('');


    return (
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
                    onClick={props.handleSendClick}
            >
                Send
            </Button>
        </Card>
    );
}