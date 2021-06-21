import React from 'react';
import Headers from '../../Components/Home/Header';
import './Cartbag.scss';
import Image from '../../Assets/Image.png';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Footer from '../Footer/Footer';

const Cartbag = () => {
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
                    <Button variant="contained"  className="btn-place">
                        Place Order
                    </Button>
                    </div>
                </div>
                <div className="address-frame">
                    Address Details
                </div>
                <div className="order-frame">
                    Order Summery
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cartbag;
