import React, { Component } from 'react';
import Login from '../Login/Login';
import './LoginSignup.scss'

class LoginSignup extends Component {
    render() {
        return (
            <div className="reg-frame">
                <div className="reg-content">
                    <div className="reg-title">
                        <img className="img-disp" src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A85534115-ba16-412e-b646-6dd43d839dd8&params=version%3A0&token=1623819189_da39a3ee_e057d757bfc70eef480f09d7ff5f60c2765825d2&api_key=CometServer1" alt="hello"></img>
                        <span style={{ marginTop: '16px' }}>Online Book Shopping</span>
                    </div>
                </div>
                <div className="main-frame">
                    <div className="main-title">
                        <span>LOGIN</span>
                        <span>SIGN UP</span>
                    </div><div className="Login-box">
                             <Login />
                    </div>

                    
                </div>
            </div>
        );
    }
}

export default LoginSignup;
