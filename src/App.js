import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Cart from './pages/Cart/Cart'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import { CartContextProvider } from './context/CartContext'
import NotFoundPage from '../src/pages/NotFoundPage'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <CartContextProvider>
          <Route exact path='/' component={Home} />
          <Route exact path='/product/:id' component={ProductDetail} />
          <Route exact path='/cart' component={Cart} />   
          <Route path='*' component={NotFoundPage} />  
        </CartContextProvider>
      </Switch>
    </Router>
  );
}

export default App;
