import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../Login/Login.scss';

let NameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
let UserNameRegex = RegExp("^([a-zA-Z0-9]*[+._-]*[a-zA-Z0-9]+@[a-zA-Z]+.{3}[a-zA-z.]*[a-zA-z]{2})+$");
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/;
let mobilenoRegex = /^[+]{1}[0][6-9]{1}[0-9]{9}$/;

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            uName: '',
            password: '',
            mobileno:'',
            fNameError: false,
            uNameError: false,
            passwordError: false,
            mobilenoError:false,
            flag:0,
        }
    }
    
    validationTest = (test, val) => {
        
        if (test.test(val)) {
            console.log("Value", val);
            console.log("test result", test.test(val));

            return true
        }
        else {
            return false;
        }
    }

    onFNameChange = e => {
        this.setState({
            fName : e.target.value,
            flag:1
        },console.log(this.state.fName));
    }

    onUserChange = e => {
        this.setState({
            uName : e.target.value,
            flag:1,
        },console.log(this.state.uName));
    }

    onPasswordChange = e => {
        this.setState({
            password : e.target.value,
            flag:1,
        },console.log(this.state.password));

    }
    onMobileChange =e =>{
        this.setState({
            mobileno : e.target.value,
            flag:1,
        },console.log(this.state.mobileno ));
    }

    signup=()=>{
        this.setState({
            fNameError : !this.validationTest(NameRegex, this.state.fName),
            uNameError : !this.validationTest(UserNameRegex, this.state.uName),
            passwordError : !this.validationTest(passwordRegex, this.state.password) ,
            mobilenoError:!this.validationTest(mobilenoRegex, this.state.mobileno) ,
        });
    }


    render() {
        let styles = {
            helperText: {

                color: 'red',
                fontWeight: 'bold',
                fontSize: '.8em',
                marginLeft: '1px',
            }
        }
        return (
            <div>
                <div className="login-frame">
                    <form className="login-form">
                        <div className="reg-input">
                            <TextField
                                error={this.state.fNameError}
                                id="FullName"
                                type="text"
                                name="fName"
                                label="FullName"
                                variant="outlined"
                                size="small"
                                onChange={e => this.onFNameChange(e)}
                                helperText={this.state.fNameError ? "Enter first name" : ''}
                                FormHelperTextProps={{ style: styles.helperText }} />
                            <TextField
                                error={this.state.uNameError}
                                id="Email"
                                type="text"
                                name="fName"
                                label="Email"
                                variant="outlined"
                                size="small"
                                onChange={e => this.onUserChange(e)}
                                helperText={this.state.uNameError ? "Enter email " : ''}
                                FormHelperTextProps={{ style: styles.helperText }}
                            />
                            <TextField
                                 error={this.state.passwordError}
                                id="password"
                                type="password"
                                name="password"
                                label="Password"
                                variant="outlined"
                                size="small"
                                onChange={e => this.onPasswordChange(e)}
                                helperText={this.state.passwordError ? "Enter Password" : ''}
                                FormHelperTextProps={{ style: styles.helperText }}
                            />
                            <TextField
                                error={this.state.mobilenoError}
                                id="Mobileno"
                                type="test"
                                name="Mobileno"
                                label="Mobileno"
                                variant="outlined"
                                size="small"
                                onChange={e => this.onMobileChange(e)}
                                helperText={this.state.mobilenoError ? "Enter vaild mobile Number" : ''}
                                FormHelperTextProps={{ style: styles.helperText }}
                            />

                        </div>
                        <div className="div-but-content">
                            <Button className="button" variant="contained" color="primary" href="#contained-buttons" onClick={this.signup}>
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
