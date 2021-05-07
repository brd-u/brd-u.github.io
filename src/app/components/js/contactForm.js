import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
// import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';



const useStyles = makeStyles((theme) => ({
    root: {

        padding: '0.2rem 1rem',
        
    },
    textField: {
        border: 2,
        // color: 'white',
        height: 100,
        // padding: '0.2rem 1rem'
        color: 'white',
        '& :-webkit-autofill': {
            '-webkit-text-fill-color': 'white',
            '-webkit-box-shadow': '0 0 0px 1000px #434343 inset',
        },
        // maxWidth: 400,
     
    },
    button: {
        padding: '15px',
    },

}));


export default function ContactForm() {


    const [status, setStatus] = useState("");
    // const [email, setEmail] = useState("");
    // const [name, setName] = useState("");
    // const [message, setMessage] = useState("");



    const classes = useStyles();



    const handleDeleteClick = (ev) => {
        const form = ev.target;
        form.reset();
    }

    const handleSubmitForm = (ev) => {
        // console.log(ev)
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();

        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS");
            } else {
                setStatus("ERROR");
            }
        };
        xhr.send(data);
    }

    return (
        <form
            onSubmit={handleSubmitForm}
            onReset={handleDeleteClick}
            action="https://formspree.io/f/mdopbyne"
            method="POST"
        >
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
                // spacing={2}
                className={classes.root}

            >

                <TextField
                    label="FULL NAME"
                    id="standard-start-adornment"
                    // helperText='Must be filled out'
                    className={classes.textField}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><PermIdentityIcon /></InputAdornment>,
                        //  WebkitBoxShadow: "0 0 0 1000px red inset"
                    }}
                    type="text"
                    name="name"


                // value={name}
                // onChange={event => this.setState({ text: event.target.value })}
                // error={name === ""}
                // helperText={name === "" ? 'Empty!' : ' '}
                // value={name}
                // onChange={e => setEmail(e.target.value)}
                />

                <TextField
                    label="E-MAIL ADRESS"
                    id="standard-start-adornment"
                    className={classes.textField}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><MailOutlineIcon /></InputAdornment>,
                    }}
                    type="email"
                    name="_replyto"
                />
                <TextField
                    id="outlined-textarea"
                    label="MESSAGE"
                    placeholder="Message content"
                    multiline
                    variant="outlined"
                    rows={4}
                    rowsMax={16}
                    type="text"
                    name="message"
                />

                <Grid
                    container
                    direction="row">

                    <ButtonGroup disableElevation variant="outlined" size="large"
                        className={classes.button}
                    >
                        <Button
                            // variant="outlined"
                            color="error"
                            type="reset"
                            className={classes.button}
                            endIcon={<DeleteIcon>delete</DeleteIcon>}
                        // onClick={handleDeleteClick}
                        >
                            Clear
                    </Button>
                        <Button
                            // variant="outlined"
                            color="primary"
                            className={classes.button}
                            endIcon={<SendIcon>send</SendIcon>}
                            type="submit"
                            value="Send"
                        >
                            Send
                    </Button>

                    </ButtonGroup>
                    {status === "SUCCESS" && <p>Thanks!</p>}
                    {status === "ERROR" && <p>Ooops! There was an error.</p>}
                </Grid>
            </Grid>

        </form>
    );

}
