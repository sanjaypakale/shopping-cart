// ProductItem.js
import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';

function ProductItem({ product }) {
  const { addToCart } = useContext(CartContext);

  return (

    <div>
      <Box display="flex" flexWrap="wrap" gap={2} p={2}>
        <Card>
          <CardContent>
            <Typography variant="h6" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${product.price.toFixed(2)}
            </Typography>
            <Button variant="contained" onClick={() => addToCart(product)} color="primary" sx={{ mt: 2 }}>
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      </Box>
      {/*       <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button> */}
    </div>
  );
}

export default ProductItem;
