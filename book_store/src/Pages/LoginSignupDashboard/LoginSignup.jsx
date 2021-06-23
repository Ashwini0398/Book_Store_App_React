import React, { Component } from 'react';
import Login from '../Login/Login';
import Signup from '../SignUp/Signup';
import Button from '@material-ui/core/Button';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './LoginSignup.scss';
import loginImage from "../../Assets/cart.png";
import {Redirect} from "react-router-dom"

class LoginSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            redirect: null
        }
    }

    componentDidMount(){
        console.log("loginsign up")
    }

    render() {
        
        return (
            <div className="reg-frame">
                <div className="reg-content">
                    <div className="reg-title">
                        <img className="img-disp" src={loginImage} alt="hii" />
                        <span style={{ marginTop: '16px' }}>Online Book Shopping</span>
                    </div>
                </div>

                <div className="main-frame">
                        <div className="main-title">
                        <Link style={{textDecoration:"none",color:"black"}} to={`/Login`} >
                        <span className="btn text1">LOGIN </span>
                        </Link>
                        <Link style={{textDecoration:"none",color:"black"}} to={`/SignUp`} >
                        <span className="btn text2">SIGNUP </span>
                        </Link>
                        </div>
                        <div className="Login-box">
                        <Switch>
                            <Route exact path="/Login" component={Login} />
                            <Route exact  path="/SignUp" component={Signup} />
                        </Switch>
                        </div>
                    </div>
            </div>
        );
    }
}

export default LoginSignup;
