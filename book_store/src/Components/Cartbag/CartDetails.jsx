import React from 'react';
import user_services from "../../Services/user_services";
import Image from '../../Assets/Image.png';

const CartDetails = (props) => {

    const [count, setCount] = React.useState(1);

    const removeItem = (e) => {
        // e.stopPropagation();
       
        console.log("id ",e );
        user_services.deleteItem(e).then((data) => {
            console.log(data);
            props.get();
        }).catch(error => {
            console.log("error", error);
        })
    }

    const decrease =(e)=>{
        debugger;
        e.stopPropagation();
        let set = count;
        setCount(--set);
        console.log(count);
    }


    const increase =(e)=>{
        debugger;
        e.stopPropagation();
        let set = count;
        setCount(++set);
        console.log(count);
    }

    return (
        <>
        { props.val.map((value,index)=>
            <div className="main-cart">
                <div>
                    <img className="img-book" src={Image} alt="lll" />
                </div>
                <div className="text-content">
                    <div className="bag-text">
                        <div className="cart-title">{value.product_id.bookName}</div>
                        <div className="cart-bookAuthor">by {value.product_id.author}</div>
                        <div className="price">Rs.{value.product_id.price}</div>
                    </div>
                    <div className="count-content">
                        <div className="minus" style={{cursor:'pointer'}} onClick={e => decrease(e)}>-</div>
                        <div className="count">{count}</div>
                        <div className="plus" style={{cursor:'pointer'}} onClick={e=> increase(e)}>+</div>
                        <div className="remove" onClick={()=>removeItem(value._id)}>Remove</div>
                    </div>
                </div>
            </div>
            ) } 
        </>
    );
}

export default CartDetails;
