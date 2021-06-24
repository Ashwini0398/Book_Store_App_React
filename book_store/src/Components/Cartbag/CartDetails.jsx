import React from 'react';
import user_services from "../../Services/user_services";
import Image from '../../Assets/Image.png';

const CartDetails = (props) => {

    const [count, setCount] = React.useState([props.val.length]);


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

    const decrease =(i)=>{
        if(count[i] === undefined){
            count[i]=0
        }
        // e.stopPropagation();
        let set = count[i];
        setCount({ ...count, [i]: --set });
        console.log(count);
    }


    const increase =(i)=>{
        if(count[i] === undefined){
            count[i]=0
        }
        // e.stopPropagation();
        let set = count[i];
        setCount({ ...count, [i]: ++set });
        console.log(count[i]);
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
                        <div className="minus" style={{cursor:'pointer'}} onClick={()=>decrease(index)}>-</div>
                        <div className="count">{count[index]}</div>
                        <div className="plus" style={{cursor:'pointer'}} onClick={()=>increase(index)}>+</div>
                        <div className="remove" onClick={()=>removeItem(value._id)}>Remove</div>
                    </div>
                </div>
            </div>
            ) } 
        </>
    );
}

export default CartDetails;
