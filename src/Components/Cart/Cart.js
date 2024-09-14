// Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext'

import { Card, CardContent, Typography, Button, List, ListItem, ListItemText, Divider } from '@mui/material';

/* function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
} */

function Cart() {
  const { cart } = useContext(CartContext);
  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Shopping Cart
        </Typography>
        <List>
          {cart.map(item => (
            <ListItem key={item.id}>
              <ListItemText
                primary={item.name}
                secondary={`Price: $${item.price.toFixed(2)} x ${item.quantity}`}
              />
            </ListItem>
          ))}
          <Divider />
          <ListItem>
            <ListItemText
              primary="Total"
              secondary={`$${totalPrice}`}
              sx={{ textAlign: 'right' }}
            />
          </ListItem>
        </List>
        <Button variant="contained" color="primary" sx={{ mt: 2, width: '100%' }}>
          Checkout
        </Button>
      </CardContent>
    </Card>
  );
}

export default Cart;
