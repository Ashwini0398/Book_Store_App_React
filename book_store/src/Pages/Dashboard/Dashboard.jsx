import React from 'react';
import Header from '../../Components/Home/Header';
import Footer from '../../Components/Footer/Footer';
import Card from "../../Components/Card/Card";
import user_services from "../../Services/user_services";
import { useEffect } from 'react';
import './Dashboard.scss'
import {ProtectedRoute} from '../../Services/auth/protectedRoutes';
import Cart from "../../Components/Cart/Cart";
import {
    Switch,
    Link
  } from "react-router-dom";
  

export default function DashboardPage(){
    const [books, setBooks] = React.useState([]);
    useEffect(() => {
        getAllBooks();
      },[]);
    
    const booksDetails=(book)=>{
        return(<Card value={book} get = {getAllBooks}/>)
    }
    
    const getAllBooks=()=>{
        user_services.getAllBooks().then((data) =>{
            console.log(data);
            setBooks(data.data.result);      
        }).catch(error=>{
          console.log("error",error);
        })
    }
    return (
        
        <div>
            <Header/>
                <div className="disp-books">
                    {books.map(booksDetails)}
                </div>
            <Footer/>
        </div>
    );
}

