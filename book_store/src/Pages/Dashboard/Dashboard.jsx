import React, { Component } from 'react';
import Header from '../../Components/Home/Header';
import Footer from '../../Components/Footer/Footer';
import Card from "../../Components/Card/Card";
import user_services from "../../Services/user_services";
import { useEffect } from 'react';
import Paginations from "@material-ui/lab/Pagination";
import './Dashboard.scss'
import Cart from "../../Components/Cart/Cart";
import Pagination from '@material-ui/lab/Pagination';
import {
  Switch,
  Link
} from "react-router-dom";


export default function Dashboard() {

  const [books, setBooks] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  const [perPage, setPerPage] = React.useState("8");
  const [currentPage, setCurrentPage] = React.useState("1");


  useEffect(() => {
    getAllBooks();
    getCartItem();
  }, []);


  const getAllBooks = () => {
    user_services.getAllBooks().then((data) => {
      console.log(data);
      setBooks(data.data.result);
    }).catch(error => {
      console.log("error", error);
    })
  }

  const getCartItem = () => {
    user_services.getCartItem().then((data) => {
      console.log("cart data -----", data.data.result.length);
      setCart(data.data.result);
    }).catch(error => {
      console.log("error", error);
    })

  }

  const sort = (e) => {

    if (e.target.value === "asec") {
      let sortData = [...books].sort(function (a, b) {
        return a.price - b.price
      });
      setBooks(sortData);
    }
    else if (e.target.value === "dsec") {
      let sortData = [...books].sort(function (a, b) {
        return b.price - a.price
      });
      setBooks(sortData);
    }
    else if (e.target.value === "alp-asec") {
      let sortData = [...books].sort(function (a, b) {
        if (a.bookName < b.bookName) { return -1; }
        return 0;
      });
      setBooks(sortData);
    }
    else if (e.target.value === "alp-dsec") {
      let sortData = [...books].sort(function (a, b) {
        if (a.bookName > b.bookName) { return 1; }
        return 0;
      });
      setBooks(sortData);
    }
  }
  const handlePagination = (e, newPages) => {
    setPerPage(e.target.value);
    setCurrentPage(newPages);

  }

  const booksDetails = (book) => {
    return (<Card value={book} get={getAllBooks} getCard={getCartItem} />)
  }


  const LastBook = currentPage * perPage;
  const FirstBook = LastBook - perPage;
  console.log("asdfgh=================>", books);
  // console.log('vfvc', this.state._books);
  const currentBooks = books.slice(FirstBook, LastBook);

  console.log("cnnnnn=========>", currentBooks);

  return (
    <>
      <Header book={books} val={cart.length} />
      <div>
        <div className="disp-sort">
          <div className="disp-title">
            <span className="books-show">Books</span>
            <span>({books.length}items)</span>
          </div>
          <div>
            <select style={{ width: '157px', height: '47px' }} onChange={(e) => sort(e)} >
              <option selected >Sort by relevance</option>
              <option value="dsec" >Price: high to low</option>
              <option value="asec"  >Price: low to high</option>
              <option value="alp-asec" >Sort By: (A-Z)</option>
              <option value="alp-dsec"  >Sort By: (Z-A)</option>
            </select>
          </div>
        </div>
        <div className="disp-books">
          {currentBooks.map(booksDetails)}
        </div>
        <div className="paginationBlock">
          <Paginations

            count={Math.floor(books.length / perPage + 1)}
            variant="outlined"
            shape="rounded"
            onChange={handlePagination}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
