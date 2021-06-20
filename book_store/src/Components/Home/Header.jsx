import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { fade,withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import './Header.scss';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const styles = theme => ({
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
})

class Home extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const { classes, theme  } = this.props;
        return (
            <>
                <div className="root">
                    <AppBar className="app-header" position="fixed">
                        <Toolbar>
                            <div className="header-title">
                                <img src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A34a6421f-a569-47b8-bc37-078211517464&params=version%3A0&token=1623902918_da39a3ee_0bbacdeff797d6586d7980ddeee59d7d3794076b&api_key=CometServer1 " alt="book"></img>
                                <div className="text">Bookstore</div>
                            </div>
                            <div className="search-bar">
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                        <SearchIcon />
                                    </div>
                                    <InputBase
                                        style={{color:'grey'}}
                                        placeholder="Search…"
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
                                <PersonOutlineIcon/>
                                <span>Profile</span>
                            </div>
                            <div className="cart">
                                <ShoppingCartIcon/>
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

export default withStyles(styles, { withTheme: true })(Home) ;