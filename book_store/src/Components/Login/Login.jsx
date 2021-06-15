import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './Login.scss';
import Button from '@material-ui/core/Button';


export default class Login extends Component {

    // constructor(props) {
    //     super(props);
       
    // }

    render() {
        let styles;
        return (
            <>
                <div className="login-frame">
                    <form className="login-form">
                        <div className="login-input">
                            <TextField
                                id="userName"
                                type="text"
                                name="uName"
                                label="User Name"
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
                            <div className="pwdchange">
                                <span className="forget">Forget Password?</span>
                            </div>

                        </div>
                        <div className="div-but-content">
                            <Button className="button" variant="contained" color="primary" href="#contained-buttons" >
                                Login
                            </Button>
                        </div>

                        <span style={{marginTop:'14px'}}>---------- OR ----------</span>
                        <div className="div-buttons">
                            <Button className="button" variant="contained" color="primary" href="#contained-buttons" >
                                Facebook
                            </Button>
                            <Button className="button" variant="contained" color="red" href="#contained-buttons">
                                Google
                            </Button>

                        </div>

                    </form>
                </div>

            </>

        );
    }
}