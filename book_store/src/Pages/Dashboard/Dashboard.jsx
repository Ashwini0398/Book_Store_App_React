import React,{Component} from 'react';
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
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


// class Dashboard extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           books:[],
//           cart:[]
//       }
//       this.getAllBooks();
//       }

     
//       getAllBooks=()=>{
//         user_services.getAllBooks().then((data) =>{
//             console.log(data);
//             this.setState({
//               books:data.data.result
//           });
//             // setBooks(data.data.result);      
//         }).catch(error=>{
//           console.log("error",error);
//         })
//     }

//     getCartItem =()=>{
//         user_services.getCartItem().then((data) =>{
//             console.log("cart data -----",data.data.result.length);
//             this.setState({
//                 cart:data.data.result
//             });
//             // setCart(data.data.result);
//         }).catch(error=>{
//           console.log("error",error);
//         })

//     }
    
//     sort =()=>{
      
//       let sortData = this.state.books.sort(function(a,b){
//         return b.price-a.price
//     });
//     this.setState({
//       books:sortData
//     });
      
//       console.log(this.state.books);
//     }

//     booksDetails=(book)=>{
//         return(<Card value={book} get = {this.getAllBooks()} getCard={this.getCartItem}/>)
//     }
  
//   render() {
//     return (
//       <>
//       <Header val={this.state.cart.length} />
//               <div>
//                 <div className="disp-sort">
//                   <div>
//                     <span className="books-show">Books</span>
//                     <span>({this.state.books.length}items)</span>
//                   </div>
//                   <div>
//                   <select style={{width:'100px'}} onChange={()=>this.sort()}>
//                     <option value="" >sort1</option><option value="" >sort2</option>
//                   </select>
//                   </div>
//                 </div>
//                   <div className="disp-books">
//                       {this.state.books.map(this.booksDetails)}
//                   </div>
//                   <Pagination className="pageination"  variant="outlined" shape="rounded" />
//               </div>
//       <Footer/>
//       </>
//   );

//   }
// }

// export default Dashboard;


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
    
    const sort =()=>{
      
      let sortData = [...books].sort(function(a,b){
        return b.price-a.price
    });
      setBooks(sortData);
      console.log(books);
    }

    const booksDetails=(book)=>{
        return(<Card value={book} get = {getAllBooks} getCard={getCartItem}/>)
    }

        return (
            <>
            <Header val={cart.length} />
                    <div>
                      <div className="disp-sort">
                        <div>
                          <span className="books-show">Books</span>
                          <span>({books.length}items)</span>
                        </div>
                        <div>
                        <select style={{width:'100px'}} onChange={()=>sort()}>
                          <option value="" >sort1</option>
                          <option value="" >sort2</option>
                        </select>
                        </div>
                      </div>
                        <div className="disp-books">
                            {books.map(booksDetails)}
                        </div>
                        <Pagination className="pageination"  variant="outlined" shape="rounded" />
                    </div>
            <Footer/>
            </>
        );
    }
