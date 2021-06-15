import React, { Component } from 'react';
import Login from '../Login/Login';
import Signup from '../SignUp/Signup';
import Button from '@material-ui/core/Button';
import './LoginSignup.scss'

class LoginSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        }
    }

    toSignUp=()=>{
        this.setState({
            open:false
        })

    }

    toLogin=()=>{
        this.setState({
            open:true
        })
    }

    render() {
        return (
            <div className="reg-frame">
                <div className="reg-content">
                    <div className="reg-title">
                        <img className="img-disp" src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A85534115-ba16-412e-b646-6dd43d839dd8&params=version%3A0&token=1623819189_da39a3ee_e057d757bfc70eef480f09d7ff5f60c2765825d2&api_key=CometServer1" alt="hello"></img>
                        <span style={{ marginTop: '16px' }}>Online Book Shopping</span>
                    </div>
                </div>

                {this.state.open ?
                    <div className="main-frame">
                        <div className="main-title">
                        <Button className="btn"> Login </Button>
                        <Button className="btn" onClick={this.toSignUp}>  Sign Up </Button>
                        </div>
                        <div className="Login-box">
                            <Login />
                        </div>
                    </div>
                    :
                    <div className="main-frame">
                        <div className="main-title">
                        <Button className="btn" onClick={this.toLogin} >  Login </Button>
                        <Button className="btn">  Sign Up </Button>
                        </div>
                        <div className="Signup-box">
                            <Signup />
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default LoginSignup;
