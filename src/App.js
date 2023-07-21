import './App.css';
import Products from './components/Products';
import Navigation from './components/Navigation.jsx';
import CartContainer from './components/CartContainer.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getProductItems } from './features/cartSlice';

function App() {

  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getProductItems());
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <Navigation/>
      <Products/>
      <CartContainer/>
    </div>
  );
}

export default App;
