// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ProductList from './Components/ProductList/ProductList'
import Cart from './Components/Cart/Cart';
import { CartProvider } from './Context/CartContext';
import Navbar from './Components/Navbar/Navbar';
import Orders from './Components/Orders/Orders';
import { Checkout } from './Components/Checkout/Checkout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
