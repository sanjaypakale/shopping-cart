// ProductList.js
import React, { useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';

function ProductList() {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 50 },
    { id: 2, name: 'Product 2', price: 30 },
  ]);

  return (
    <div>

      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
