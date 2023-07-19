import './App.css';
import Products from './components/Products';
import Navigation from './components/Navigation.jsx';
import CartContainer from './components/CartContainer.jsx';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Products/>
      <CartContainer/>
    </div>
  );
}

export default App;
