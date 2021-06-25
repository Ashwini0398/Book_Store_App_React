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
import user_services from "../../Services/user_services";
import BookDescription from '../BookDesciption/BookDescription';
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
  buttonCard: {
    width: '224px',
    height: '36px',
    marginBottom: '12px',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  btn1Card: {
    width: '89px',
    fontSize: '8px',
    fontWeight: 'bold',
    backgroundColor: '#A03037',
  },
  btn2Card: {
    width: '89px',
    fontSize: '9px',
    fontWeight: 'bold',
    backgroundColor: '#333333',
  },
  btn3Card: {
    backgroundColor: '#3371B5',
    width: '88%',
    height: '39px',
    color: 'white',
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [addCart, setAdd] = React.useState([]);
  const [displayCart, setDisplayCart,] = React.useState(false);


  const ButtonClick = () => {
    setDisplayCart(true);

  }

  const addToCart = (value) => {

    let Data = {
      isCart: true
    }

    user_services.addToCart(value._id, Data).then((data) => {
      console.log(data);
      props.getCard();
      ButtonClick(value.bookName);

    }).catch(error => {
      console.log("error", error);
    })
  }


  const descriptionshow = (e) => {
    e.stopPropagation();
    setOpen(true);
  }
  const descriptionhide = (e) => {
    e.stopPropagation();
    setOpen(false);
  }


  return (
    <Card className={classes.root} >
      <CardContent className={classes.content} onMouseOver={(e) => descriptionshow(e)} onMouseLeave={(e) => descriptionhide(e)}>
        <div style={{ display: open ? 'block' : 'none' }}>{props.value.description}</div>
        <img style={{ display: open ? 'none' : 'block' }} className={classes.image} src={Image} alt="" />
      </CardContent>
      <CardActions className={classes.cardTxt}>
        <div className={classes.bookTitle}>{props.value.bookName}</div>
        <div className={classes.bookAuthor}>by {props.value.author}</div>
        <div className={classes.bookRating}>4.5 &#9733;</div>
        <div>Rs.{props.value.price}</div>
      </CardActions>
      <div className={classes.buttonCard} onClick={ButtonClick}>
        {displayCart ?
          <Button variant="contained" fullwidth color="secondary" className={classes.btn3Card}  >
            ADD TO BAG
          </Button>
          :
          <>
            <Button variant="contained" color="secondary" id={props.value._id} className={classes.btn1Card} onClick={() => addToCart(props.value)} >
              ADD TO BAG
            </Button>
            <Button variant="contained" color="secondary" className={classes.btn2Card}>
              &#10084; WISHLIST
            </Button>
          </>


        }

      </div>
    </Card>
  );
}

