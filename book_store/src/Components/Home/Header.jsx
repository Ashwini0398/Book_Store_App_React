import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import './Header.scss';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import book from "../../Assets/book.svg";
import { Redirect, useHistory } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import Card from "../../Components/Card/Card";
import user_services from "../../Services/user_services";
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Pagination from '@material-ui/lab/Pagination';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {ProtectedRoute} from '../../Services/auth/protectedRoutes';
import Cartbag from '../Cartbag/Cartbag';  

// import { browserHistory } from 'react-router';




const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        backgroundColor: 'white',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        '@media(maxWidth: 600px)': {
            marginLeft: '12px',
        }
    },
    searchIcon: {
        color: 'grey',
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Home (props) {
    const classes = useStyles();

    const [redirect, setRedirect] = React.useState(null);
    const [cart, setCart] = React.useState([]);
    const [search, setSearch] = React.useState("");
    // useEffect(() => {
    //     getCartItem();
    // },[]);
    

    const searchBooks =(e)=>{
        setSearch(e.target.value);
        console.log(e.target.value);
    }

    const redirectTo=()=>{
        console.log("hellloooooo")
        setRedirect("/CartBag");
    }

    if (redirect) {
        return <Redirect to={{
          pathname: redirect,
          state: { referrer: cart }

        }} />
        
      }
      else {
        return (
            <>
                <div className="root">
                    <AppBar className="app-header" position="fixed">
                        <Toolbar>
                        <Link style={{textDecoration:"none"}} to={'/Dashboard'} >
                            <div className="header-title">
                                <img className="img" src={book} alt="hii" />
                                <div className="text">Bookstore</div>
                            </div>
                        </Link>
                            <div className="search-bar">
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                        <SearchIcon />
                                    </div>
                                    <InputBase 
                                        style={{ color: 'grey' }}
                                        placeholder="Search…"
                                        value={search}
                                        onChange={(e)=>searchBooks(e)}
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                           
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </div>
                            </div>
                            <div className="side-header">
                                <div className="profile">
                                    <PersonOutlineIcon />
                                    <span>Profile</span>
                                </div>
                                <div className="cart" >
                                
                                    <Badge badgeContent={props.val} color="primary" onClick={()=>redirectTo()}>
                                        <ShoppingCartIcon />
                                    </Badge>
                               
                                    <span>Cart</span>
                                </div>
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
            </>
        );
    }
}


