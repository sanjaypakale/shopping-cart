import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { ShoppingBasket } from '@mui/icons-material';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Shopping Site
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/cart">
          <ShoppingCartIcon />
          Cart
        </Button>
        <Button color="inherit" component={Link} to="/orders">
          <ShoppingBasket />
          Orders
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
