import React, { Component } from 'react';
import Header from '../Home/Header';
import Footer from '../Footer/Footer';
import Lastimage from '../../Assets/last.png';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";
import './Ordersucess.scss'

class Ordersucess extends Component {
    constructor(props) {
        super(props);
        this.state={
            redirect: "",
        }
    }
    

    continueShoping = () => {
        this.setState({ redirect: "/Dashboard" });
    }

    render() {
        if (this.state.redirect) {

            return <Redirect to={this.state.redirect} />
        }


        return (
            <div>
                <Header />
                <div className="Conatiner-last">
                    <div className="Lastimg">
                        <img id="Last-image" src={Lastimage} alt="Book" />
                    </div>
                    <div className="Last-Text">
                        hurray!!!! your order is confirmed
                        </div>
                    <div className="Last-Text">
                        the order id is 60b996b3f601ea72faca6998
                        </div>
                    <div className="Last-Text">
                        save the order id for
                        </div>
                    <div className="Last-Text">
                        future communication
                    </div>
                    <div className="Last-Button">
                        <Button className="buttonsize" onClick={this.continueShoping} fullWidth size="small" color="primary" variant="contained">
                            Continue Shopping
                    </Button>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

export default Ordersucess;
