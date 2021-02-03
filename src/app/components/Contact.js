import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';



import Axios from 'axios';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if (res.data.success) {

                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
             })

    }
    handleDeleteClick = (event) => {
        console.log('delete data')
        this.setState({
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        });
    }


    render() {
        return (

            <Container component='main' disableGutters='true' >

                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                // spacing={2}
                >

                    <TextField
                        label="FULL NAME"
                        // id="standard-start-adornment"
                        id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}
                        // helperText='Must be filled out'

                        InputProps={{
                            startAdornment: <InputAdornment position="start"><PermIdentityIcon /></InputAdornment>,
                        }}
                    />

                    <TextField
                        label="E-MAIL ADRESS"
                        // id="standard-start-adornment"
                        id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}

                        InputProps={{
                            startAdornment: <InputAdornment position="start"><MailOutlineIcon /></InputAdornment>,
                        }}
                    />
                    <TextField
                        // id="outlined-textarea"
                        id="message" name="message" as="textarea" value={this.state.message} onChange={this.handleChange}
                        label="MESSAGE"
                        placeholder="Message content"
                        multiline
                        variant="outlined"
                        rows={4}
                        rowsMax={16}

                    />

                    <Grid
                        container
                        direction="row">

                        <ButtonGroup disableElevation variant="outlined" size="large" >
                        <Button
                                // variant="outlined"
                                color="second"
                                // className={classes.button}
                                endIcon={<DeleteIcon>delete</DeleteIcon>}
                                type="submit" 
                                onClick={this.handleDeleteClick}
                            >
                                Delete
                            </Button>
                            <Button
                                // variant="outlined"
                                color="primary"
                                // className={classes.button}
                                endIcon={<SendIcon>send</SendIcon>}
                                type="submit" disabled={this.state.disabled}
                                onClick={this.handleSubmit}
                            >
                                Send
                            </Button>
                           
                        </ButtonGroup>


                    </Grid>


                </Grid>
                {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}

            </Container >




        );
    }

}

export default Contact;