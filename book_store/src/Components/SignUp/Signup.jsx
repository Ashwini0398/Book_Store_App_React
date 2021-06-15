import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../Login/Login.scss';

class Signup extends Component {
    render() {
        return (
            <div>
                <div className="login-frame">
                    <form className="login-form">
                        <div className="reg-input">
                            <TextField
                                id="FullName"
                                type="text"
                                name="fName"
                                label="FullName"
                                variant="outlined"
                                size="small"
                            />
                            <TextField
                                id="Email"
                                type="text"
                                name="fName"
                                label="Email"
                                variant="outlined"
                                size="small"
                            />
                            <TextField
                                id="password"
                                type="password"
                                name="password"
                                label="Password"
                                variant="outlined"
                                size="small"
                            />
                            <TextField
                                id="Mobileno"
                                type="test"
                                name="Mobileno"
                                label="Mobileno"
                                variant="outlined"
                                size="small"
                            />

                        </div>
                        <div className="div-but-content">
                            <Button className="button" variant="contained" color="primary" href="#contained-buttons" >
                                Signup
                            </Button>
                        </div>

                    </form>
                </div>

            </div>
        );
    }
}

export default Signup;
