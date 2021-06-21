import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from '../../Assets/Image.png';
import { ProtectedRoute } from '../../Services/auth/protectedRoutes';
import Cart from "../../Components/Cart/Cart";
import { width } from '@material-ui/system';
import { Redirect } from 'react-router';
import {
  Switch,
  Link,
  Route
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 230,
    minHeight: 260,
    margin: '10px',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    background: '#F5F5F5',
    height: 155
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  image: {
    height: '155px',
    width: '130px',
  },
  cardTxt: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column'
  },
  bookTitle: {
    marginLeft: '8px',
    fontWeight: '600',
  },
  bookAuthor: {
    paddingTop: '3px',
    fontSize: 'x-small',
    height: '12px',
    color: '#a49595',
    fontWeight: '600'
  },
  bookRating: {
    fontSize: 'small',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: '600',
    background: 'green',
    width: '40px',
    height: '20px',
    marginTop: '5px',
    color: 'white'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  buttonCard:{
    width: '224px',
    height: '36px',
    marginBottom: '12px',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  btn1Card:{
    width: '89px',
    fontSize: '9px',
    fontWeight: 'bold',
    backgroundColor:'#A03037',
  },
  btn2Card:{
    width: '89px',
    fontSize: '9px',
    fontWeight: 'bold',
    backgroundColor:'#333333',
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const from = { pathname: '/Cart' };
  const [redirect, setRedirect] = React.useState(null);
  const [cart,setCart]=React.useState([]);

  const redirectCart = () => {
    setRedirect("/Cart");
    // return <ProtectedRoute exact path={"/Cart"}>
    //   <Cart books= {val}/>
    // </ProtectedRoute>
  }
  if (redirect) {
    return <Redirect to={{
      pathname: redirect,
      state: { books: props.value }
    }} />
    // return <ProtectedRoute exact path={"/Cart"}>
    //   <Cart books= {props.value}/>
    // </ProtectedRoute>
  }
  else {
    return (
      <ProtectedRoute exact path={"/Dashboard"}>
        <Card className={classes.root} onClick={() => redirectCart()}>
          <CardContent className={classes.content}>
            <img className={classes.image} src={Image} alt="" />
          </CardContent>
          <CardActions className={classes.cardTxt}>
            <div className={classes.bookTitle}>{props.value.bookName}</div>
            <div className={classes.bookAuthor}>by {props.value.author}</div>
            <div className={classes.bookRating}>4.5 &#9733;</div>
            <div>Rs.{props.value.price}</div>
          </CardActions>
          <div className={classes.buttonCard}>
            <Button variant="contained" color="secondary" className={classes.btn1Card}>
              ADD TO BAG
            </Button>
            <Button variant="contained" color="secondary" className={classes.btn2Card}>
              &#10084; WISHLIST
            </Button>
          </div>
        </Card>
      </ProtectedRoute>
    );
  }
}
