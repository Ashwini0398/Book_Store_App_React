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
import {Redirect} from "react-router-dom"

class LoginSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            redirect: null
        }
    }

    toSignUp=()=>{
        this.setState({open:false})
        this.setState({ redirect: "/Login" });

    }

    toLogin=()=>{
        this.setState({open:true })
        this.setState({ redirect: "/Signup" });
    }

    render() {
        
        return (
            <div className="reg-frame">
                <div className="reg-content">
                    <div className="reg-title">
                        <img className="img-disp" src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A7b0eeb81-a918-4f41-9bc2-f508474e79ce&params=version%3A0&token=1623902918_da39a3ee_0bbacdeff797d6586d7980ddeee59d7d3794076b&api_key=CometServer1" alt="hello"></img>
                        <span style={{ marginTop: '16px' }}>Online Book Shopping</span>
                    </div>
                </div>

                <div className="main-frame">
                        <div className="main-title">
                        <Link style={{textDecoration:"none",color:"black"}} to={`/Login`} >
                        <span className="btn text ">LOGIN </span>
                        </Link>
                        <Link style={{textDecoration:"none",color:"black"}} to={`/SignUp`} >
                        <span className="btn text2">SIGNUP </span>
                        </Link>
                        </div>
                        <div className="Login-box">
                        <Switch>
                            <Route exact path="/Login" component={Login} />
                            <Route exact path="/SignUp" component={Signup} />
                        </Switch>
                        </div>
                    </div>

                {/* <Switch>
                    <Route exact path="/LoginSignUp/Login" component={Login} />
                    <Route exact path="/LoginSignUp/SignUp" component={Signup} />
                </Switch> */}
                {/* {this.state.open ?
                    <div className="main-frame">
                        <div className="main-title">
                        <span className="btn text ">LOGIN </span>
                        <span className="btn text2" onClick={this.toSignUp}>  SIGNUP </span>
                        </div>
                        <div className="Login-box">
                            <Login />
                        </div>
                    </div>
                    :
                    <div className="main-frame">
                        <div className="main-title">
                        <span className="btn text2" onClick={this.toLogin} >  LOGIN</span>
                        <span className="btn text">  SIGNUP</span>
                        </div>
                        <div className="Signup-box">
                            <Signup />
                        </div>
                    </div>
                } */}
            </div>
        );
    }
}

export default LoginSignup;
