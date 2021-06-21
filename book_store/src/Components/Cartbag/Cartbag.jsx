import React from 'react';
import Headers from '../../Components/Home/Header';
import './Cartbag.scss';
import Image from '../../Assets/Image.png';
import Button from '@material-ui/core/Button';
import Footer from '../Footer/Footer';
import TextField from '@material-ui/core/TextField';





const Cartbag = () => {
    const [open, setopen] = React.useState(false);
    const [openCon, setopenCon] = React.useState(false);

    const handleClick = () => {
        setopen(true);
    }

    const handleContinue =() =>{
        setopenCon(true)
    }


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
                                <div className="cart-title">Good</div>
                                <div className="cart-bookAuthor">by ashu</div>
                                <div className="price">Rs.600</div>
                            </div>
                            <div className="count-content">
                                <div className="minus">-</div>
                                <div className="count">1</div>
                                <div className="plus">+</div>
                                <div className="remove">Remove</div>
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
                            <div> <Button variant="outlined" className="dtl-btn">
                                Add New Address
                            </Button></div>
                        </div>
                        <div className="custm-content-names">

                            <div className="city">
                                <div>Full Name</div>
                                <div><TextField
                                    id="name"
                                    type="text"
                                    name="name"
                                    variant="outlined"
                                    size="small" /></div>
                            </div>
                            <div className="state">
                                <div>Mobile no</div>
                                <div><TextField
                                    id="mobileno"
                                    type="text"
                                    name="mobileno"
                                    variant="outlined"
                                    size="small" /></div>
                            </div>
                        </div>
                        <div className="heading">
                            <div className="work ">1. Work</div>
                            <div className="edit"> Edit </div>
                        </div>
                        <div>Address </div>
                        <input className="address-feild" type="text" id="lname" name="lname" />

                        <div className="city-state">
                            <div className="city">
                                <div>city/town</div>
                                <div><TextField
                                    id="city"
                                    type="text"
                                    name="city"
                                    variant="outlined"
                                    size="small" /></div>
                            </div>
                            <div className="state">
                                <div>State</div>
                                <div><TextField
                                    id="state"
                                    type="text"
                                    name="state"
                                    variant="outlined"
                                    size="small" /></div>
                            </div>
                        </div>
                        <div className="heading">
                            <div className="work ">2.Home</div>
                        </div>
                        <div>Address </div>
                        <input className="address-feild" type="text" id="lname" name="lname" />

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
                        <Button variant="contained" className="btn-place">
                            Checkout
                        </Button>
                    </div>
                </div>
                :
                <div className="order-frame">
                    Order Summery
                </div>
                }
            </div>
            <Footer />
        </div>
    );
}

export default Cartbag;
