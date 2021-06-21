import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import  './Footer.scss';
export default function Footer() {
    return (
        <AppBar position="static" className="footer-area">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                Copyright © 2020,Bookstore Private Limited.All Rights Reserved 
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}
