import React, { Component } from 'react';
import { useEffect } from 'react';
import Headers from '../../Components/Home/Header';
import './Cartbag.scss';

import Button from '@material-ui/core/Button';
import Footer from '../Footer/Footer';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Redirect } from 'react-router';
import user_services from "../../Services/user_services";
import Image from '../../Assets/Image.png';
import CartDetails from './CartDetails';
import { render } from 'react-dom';
import CartDisp from '../Cartbag/CartDisp';

export default class Cartbag extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            book: [],
            redirect: '',
            open: false,
            openCon: false,
            FullName: '',
            Number: '',
            PinCode: '',
            Locality: '',
            Address: '',
            City: '',
            LandMark: '',
            FullNameError: false,
            NumberError: false,
            PinCodeError: false,
            LocalityError: false,
            AddressError: false,
            CityError: false,
            LandMarkError: false,
            temp: false,
            details: [false],
            redirect:''

        }

    }

    // shouldComponentUpdate(){}

    componentDidMount() {
        this._isMounted = true;
       
        this.getCartItem();
    }
    // componentWillUnmount() {
    //     this._isMounted = false;
    // }

    validation = () => {
        let isError = false;
        const error = this.state;

        error.FullNameError = this.state.FullName === '' ? true : false;
        error.NumberError = this.state.Number === '' ? true : false;
        error.PinCodeError = this.state.PinCode === '' ? true : false;
        error.LocalityError = this.state.Locality === '' ? true : false;
        error.AddressError = this.state.Address === '' ? true : false;
        error.CityError = this.state.City === '' ? true : false;
        error.LandMarkError = this.state.LandMark === '' ? true : false;
        this.setState({
    
            ...error
          })

        return isError = (error.FullName !== '' && error.Number !== ''
            && error.PinCode !== '' && error.Locality !== ''
            && error.Address !== '' && error.City !== ''
            && error.LandMark !== '') ? true : false

    }

    changeFullName = (e) => {

        this.setState({
            FullName: e.target.value,
            flag: 1,
        }, () => console.log(this.state.FullName));
    }
    changeNumber = (e) => {

        this.setState({
            Number: e.target.value,
            flag: 1,
        }, () => console.log(this.state.Number));
    }

    changePincode = (e) => {

        this.setState({
            PinCode: e.target.value,
            flag: 1,
        }, () => console.log(this.state.PinCode));
    }

    changeLocality = (e) => {

        this.setState({
            Locality: e.target.value,
            flag: 1,
        }, () => console.log(this.state.Locality));
    }

    changeAddress = (e) => {

        this.setState({
            Address: e.target.value,
            flag: 1,
        }, () => console.log(this.state.Address));
    }

    changeCity = (e) => {

        this.setState({
            City: e.target.value,
            flag: 1,
        }, () => console.log(this.state.City));
    }

    changeLandmark = (e) => {

        this.setState({
            LandMark: e.target.value,
            flag: 1,
        }, () => console.log(this.state.LandMark));
    }


    handleContinue = () => {
        const isValidated = this.validation();
        this.setState({ temp: true });
        console.log(isValidated);
        if (isValidated) {
            console.log()
            this.setState({openCon:true});
        }
    }



    handleClick = () => {
        this.setState({open:true});
    }

    getCartItem = () => {
        user_services.getCartItem().then((data) => {
            console.log("cart data -----", data.data.result);
            this.setState({ book: data.data.result });
        }).catch(error => {
            console.log("error", error);
        })

    }

    OrderPlaced=()=>{
        this.setState({redirect: "/orderSucess"});
    }

    render() {
        if(this.state.redirect){
            return <Redirect to ={this.state.redirect}/>
        }
        let styles = {
            helperText: {

                color: 'red',
                fontWeight: 'bold',
                fontSize: '.8em',
                marginLeft: '1px',
            }
        }
        
      
        console.log("get books",this.getCartItem);
        return (
            <div>
                <Headers val={this.state.book.length} />
                <div className="CartBag-frame">
                    <div className="title">Home/My Cart</div>
                    <div className="cartBag-content">
                        <div >My Cart ({this.state.book.length})</div>
                        <CartDetails val={this.state.book}  get={this.getCartItem} />
                        {/* <CartDisp val={this.state.book} /> */}
                        {/* { this.state.cartData.map((this.cartBagDetails)) } */}
                        <div className="btn-content">
                            <Button variant="contained" className="btn-place" onClick={this.handleClick} >
                                Place Order
                            </Button>
                        </div>
                    </div>
                    {this.state.open ?
                        <div className="address-frame-details">
                            <div className="customer-dtl">
                                <div className="header-detail">Customer Details</div>
                                <div className="dtl-btn">Edit</div>
                            </div>
                            <div className="custm-content-names">

                                <div className="city">
                                    <div><TextField
                                        error={this.state.FullNameError}
                                        disabled={this.state.temp}
                                        size="small"
                                        label="FullName"
                                        type="text"
                                        name="text"
                                        variant="outlined"
                                        onChange={e => this.changeFullName(e)}
                                        helperText={this.state.FullNameError ? "Enter FullName" : ''}
                                        FormHelperTextProps={{ style: styles.helperText }}
                                    />
                                    </div>
                                </div>
                                <div className="state">
                                    <div><TextField
                                        error={this.state.NumberError}
                                        disabled={this.state.temp}
                                        size="small"
                                        label="Phone Number"
                                        type="Number"
                                        name="Number"
                                        variant="outlined"
                                        onChange={e => this.changeNumber(e)}
                                        helperText={this.state.NumberError ? "Enter Phone Number" : ''}
                                    /></div>
                                </div>
                            </div>
                            <div className="custm-content-names">
                                <div className="InputFields">
                                    <TextField
                                        error={this.state.PinCodeError}
                                        disabled={this.state.temp}
                                        size="small"
                                        label="Pin Code"
                                        type="text"
                                        name="text"
                                        variant="outlined"
                                        onChange={e => this.changePincode(e)}
                                        helperText={this.state.PinCodeError ? "Enter Pincode " : ''}
                                    />
                                </div>
                                <div className="InputFields">
                                    <TextField
                                        error={this.state.LocalityError}
                                        disabled={this.state.temp}
                                        size="small"
                                        label="Locality"
                                        type="text"
                                        name="text"
                                        variant="outlined"
                                        onChange={e => this.changeLocality(e)}
                                        helperText={this.state.LocalityError ? "Enter Locality" : ''}
                                    />
                                </div>
                            </div>

                            <div className="address-feild"><TextField
                                error={this.state.AddressError}
                                disabled={this.state.temp}
                                label="Address"
                                type="text"
                                name="text"
                                variant="outlined"
                                fullWidth
                                onChange={e => this.changeAddress(e)}
                                helperText={this.state.AddressError ? "Enter Address" : ''}
                            /></div>


                            <div className="city-state">
                                <div className="city">
                                    <div><TextField
                                        error={this.state.CityError}
                                        disabled={this.state.temp}
                                        size="small"
                                        label="City"
                                        type="text"
                                        name="text"
                                        variant="outlined"
                                        onChange={e => this.changeCity(e)}
                                        helperText={this.state.CityError ? "Enter City" : ''} /></div>
                                </div>
                                <div className="state">
                                    <div><TextField
                                        error={this.state.LandMarkError}
                                        disabled={this.state.temp}
                                        size="small"
                                        label="LandMark"
                                        type="text"
                                        name="text"
                                        variant="outlined"
                                        onChange={e => this.changeLandmark(e)}
                                        helperText={this.state.LandMarkError ? "Enter LandMark" : ''}
                                    /></div>
                                </div>
                            </div>
                            <div className="heading">
                                <div className="work ">Type</div>
                            </div>
                            <div><FormControlLabel
                                control={
                                    <Checkbox
                                        disabled={this.state.temp}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Home"
                            />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            disabled={this.state.temp}
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="Work"
                                />

                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            disabled={this.state.temp}
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="Other"
                                /> </div>


                            <div className="btn-content">
                                <Button variant="contained" className="btn-place" onClick={this.handleContinue}>
                                    Continue
                                </Button>
                            </div>
                        </div>

                        :

                        <div className="address-frame">
                            Address Details
                        </div>

                    }
                    {this.state.openCon ?
                        <div className="order-content">
                            <div className="header-detail" >Order Summary</div>
                            <div className="main-cart">
                                <div>
                                    <img className="img-book" src={Image} alt="lll" />
                                </div>
                                <div className="text-content">
                                    <div className="bag-text">
                                        <div className="cart-title">Good</div>
                                        <div className="cart-bookAuthor">by ashu</div>
                                        <div className="price">Rs.600</div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-content">
                                <Button variant="contained" className="btn-place" onClick={this.OrderPlaced} >
                                    Checkout
                                </Button>
                            </div>
                        </div>
                        :
                        <div className="order-frame" >
                            Order Summery
                        </div>
                    }
                </div>
                <Footer />
            </div >
        );
    }
}

