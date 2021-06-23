import React from 'react';
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

const Cartbag = (props) => {
    const [open, setopen] = React.useState(false);
    const [openCon, setopenCon] = React.useState(false);
    const [redirect, setRedirect] = React.useState(null);
    const [FullNameError, setFullNameError] = React.useState(false);
    const [NumberError, setNumberError] = React.useState(false);
    const [PinCodeError, setPinCodeError] = React.useState(false);
    const [LocalityError, setLocalityError] = React.useState(false);
    const [AddressError, setAddressError] = React.useState(false);
    const [CityError, setCityError] = React.useState(false);
    const [LandMarkError, setLandMarkError] = React.useState(false);
    const [FullName, setFullName] = React.useState('');
    const [Number, setNumber] = React.useState('');
    const [PinCode, setPinCode] = React.useState('');
    const [Locality, setLocality] = React.useState('');
    const [Address, setAddress] = React.useState('');
    const [City, setCity] = React.useState('');
    const [LandMark, setLandMark] = React.useState('');
    const [temp, setTemp] = React.useState(false);





    const handleClick = () => {
        setopen(true);
    }



    const validation = () => {
        let isError = false;

        setFullNameError(FullName === '' ? true : false)
        setNumberError(Number === '' ? true : false);
        setPinCodeError(PinCode === '' ? true : false);
        setLocalityError(Locality === '' ? true : false);
        setAddressError(Address === '' ? true : false);
        setCityError(City === '' ? true : false);
        setLandMarkError(LandMark === '' ? true : false);

        return isError = (FullName !== '' && Number !== ''
            && PinCode !== '' && Locality !== ''
            && Address !== '' && City !== ''
            && LandMark !== '') ? true : false

    }

    const changeFullName = (e) => {

        console.log(e.target.value);
        setFullName(e.target.value);
    }
    const changeNumber = (e) => {

        console.log(e.target.value);
        setNumber(e.target.value);
    }

    const changePincode = (e) => {

        console.log(e.target.value);

        setPinCode(e.target.value);
    }

    const changeLocality = (e) => {

        console.log(e.target.value);
        setLocality(e.target.value);
    }

    const changeAddress = (e) => {

        console.log(e.target.value);
        setAddress(e.target.value);
    }

    const changeCity = (e) => {

        console.log(e.target.value);
        setCity(e.target.value);
    }

    const changeLandmark = (e) => {

        console.log(e.target.value);
        setLandMark(e.target.value);
    }


    const handleContinue = () => {
        const isValidated = validation();
        setTemp(true);
        console.log(isValidated);
        if (isValidated) {
            console.log()
            setopenCon(true)
        }
    }
    const removeItem = () => {
        user_services.deleteItem(props.value._id).then((data) => {
    
            console.log(data);
            props.get();
        }).catch(error => {
            console.log("error", error);
        })
    }



    let styles = {
        helperText: {

            color: 'red',
            fontWeight: 'bold',
            fontSize: '.8em',
            marginLeft: '1px',
        }
    }
    const handleCheckout = () => {
        setRedirect("/orderSucess");

    }
    if (redirect) {
        return <Redirect to={{
            pathname: redirect,
        }} />
    }
    else {
        return (
            <div>
                <Headers />
                <div className="CartBag-frame">
                    <div className="title">Home/My Cart</div>
                    <div className="cartBag-content">
                        <div >My Cart</div>
                        <div className="main-cart">
                            <div>
                                <img className="img-book" src={Image} alt="lll" />
                            </div>
                            <div className="text-content">
                                <div className="bag-text">
                                    <div className="cart-title">good</div>
                                    {/* {props.value.product_id.bookName} */}
                                    <div className="cart-bookAuthor">by  me</div>
                                    {/* {props.value.product_id.author} */}
                                    <div className="price">Rs.900</div>
                                    {/* {props.value.product_id.price} */}
                                </div>
                                <div className="count-content">
                                    <div className="minus" >-</div>
                                    <div className="count">1</div>
                                    <div className="plus" >+</div>
                                    <div className="remove" onClick={() => removeItem()}>Remove</div>
                                </div>
                            </div>
                        </div>

                        <div className="btn-content">
                            <Button variant="contained" className="btn-place" onClick={handleClick}>
                                Place Order
                            </Button>
                        </div>
                    </div>
                    {open ?
                        <div className="address-frame-details">
                            <div className="customer-dtl">
                                <div className="header-detail">Customer Details</div>
                                <div className="dtl-btn">Edit</div>
                            </div>
                            <div className="custm-content-names">

                                <div className="city">
                                    <div><TextField
                                        error={FullNameError}
                                        disabled={temp}
                                        size="small"
                                        label="FullName"
                                        type="text"
                                        name="text"
                                        variant="outlined"
                                        onChange={e => changeFullName(e)}
                                        helperText={FullNameError ? "Enter FullName" : ''}
                                        FormHelperTextProps={{ style: styles.helperText }}
                                    />
                                    </div>
                                </div>
                                <div className="state">
                                    <div><TextField
                                        error={NumberError}
                                        disabled={temp}
                                        size="small"
                                        label="Phone Number"
                                        type="Number"
                                        name="Number"
                                        variant="outlined"
                                        onChange={e => changeNumber(e)}
                                        helperText={NumberError ? "Enter Phone Number" : ''}
                                    /></div>
                                </div>
                            </div>
                            <div className="custm-content-names">
                                <div className="InputFields">
                                    <TextField
                                        error={PinCodeError}
                                        disabled={temp}
                                        size="small"
                                        label="Pin Code"
                                        type="text"
                                        name="text"
                                        variant="outlined"
                                        onChange={e => changePincode(e)}
                                        helperText={PinCodeError ? "Enter Pincode " : ''}
                                    />
                                </div>
                                <div className="InputFields">
                                    <TextField
                                        error={LocalityError}
                                        disabled={temp}
                                        size="small"
                                        label="Locality"
                                        type="text"
                                        name="text"
                                        variant="outlined"
                                        onChange={e => changeLocality(e)}
                                        helperText={LocalityError ? "Enter Locality" : ''}
                                    />
                                </div>
                            </div>

                            <div className="address-feild"><TextField

                                error={AddressError}
                                disabled={temp}
                                label="Address"
                                type="text"
                                name="text"
                                variant="outlined"
                                fullWidth
                                onChange={e => changeAddress(e)}
                                helperText={AddressError ? "Enter Address" : ''}
                            /></div>


                            <div className="city-state">
                                <div className="city">
                                    <div><TextField
                                        error={CityError}
                                        disabled={temp}
                                        size="small"
                                        label="City"
                                        type="text"
                                        name="text"
                                        variant="outlined"
                                        onChange={e => changeCity(e)}
                                        helperText={CityError ? "Enter City" : ''} /></div>
                                </div>
                                <div className="state">
                                    <div><TextField
                                        error={LandMarkError}
                                        disabled={temp}
                                        size="small"
                                        label="LandMark"
                                        type="text"
                                        name="text"
                                        variant="outlined"
                                        onChange={e => changeLandmark(e)}
                                        helperText={LandMarkError ? "Enter LandMark" : ''}
                                    /></div>
                                </div>
                            </div>
                            <div className="heading">
                                <div className="work ">Type</div>
                            </div>
                            <div><FormControlLabel
                                control={
                                    <Checkbox
                                        disabled={temp}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Home"
                            />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            disabled={temp}
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="Work"
                                />

                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            disabled={temp}
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="Other"
                                /> </div>


                            <div className="btn-content">
                                <Button variant="contained" className="btn-place" onClick={handleContinue}>
                                    Continue
                                </Button>
                            </div>
                        </div>

                        :

                        <div className="address-frame">
                            Address Details
                        </div>

                    }
                    {openCon ?
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
                                <Button variant="contained" className="btn-place" onClick={handleCheckout}>
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

export default Cartbag;
