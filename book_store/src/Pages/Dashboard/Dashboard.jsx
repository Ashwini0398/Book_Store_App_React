import React, { Component } from 'react';
import Header from '../../Components/Home/Header';
import Footer from '../../Components/Footer/Footer';
import Card from "../../Components/Card/Card";
import user_services from "../../Services/user_services";
import { useEffect } from 'react';
import './Dashboard.scss'
import Cart from "../../Components/Cart/Cart";
import Pagination from '@material-ui/lab/Pagination';
import {
    Switch,
    Link
  } from "react-router-dom";
import Cartbag from '../../Components/Cartbag/Cartbag';
import {ProtectedRoute} from '../../Services/auth/protectedRoutes'; 
import BookDescription from '../../Components/BookDesciption/BookDescription'; 

  export default function Dashboard (){

    const [books, setBooks] = React.useState([]);
    const [cart, setCart] = React.useState([]);

    useEffect(() => {
        getAllBooks();
        getCartItem();
      },[]);
    
    
    const getAllBooks=()=>{
        user_services.getAllBooks().then((data) =>{
            console.log(data);
            setBooks(data.data.result);      
        }).catch(error=>{
          console.log("error",error);
        })
    }

    const getCartItem =()=>{
        user_services.getCartItem().then((data) =>{
            console.log("cart data -----",data.data.result.length);
            setCart(data.data.result);
        }).catch(error=>{
          console.log("error",error);
        })

    }
    
    const booksDetails=(book)=>{
        return(<Card value={book} get = {getAllBooks} getCard={getCartItem}/>)
    }

        return (
            <>
            
            <Header val={cart.length} />
                    <div>
                        <div className="disp-books">
                            {books.map(booksDetails)}
                        </div>
                        <Pagination className="pageination"  variant="outlined" shape="rounded" />
                    </div>
            <Footer/>
            </>
        );
    }
