import './App.css';
import LoginDashboard from './Pages/LoginSignupDashboard/LoginSignup'
import Cartbag from '../src/Components/Cartbag/Cartbag';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {ProtectedRoute} from '../src/Services/auth/protectedRoutes';
// import Home from './Components/Home/Home';
import Header from './Components/Home/Header';
import Dashboard from './Pages/Dashboard/Dashboard';
import Cart from './Components/Cart/Cart';
import Ordersucess from '../src/Components/OrderSucess/Ordersucess';
function App() {
  return (
    <BrowserRouter>
      < Switch>
        <Route exact path="/" component={LoginDashboard} />
        <ProtectedRoute  path="/Dashboard" component={Dashboard} />
        <ProtectedRoute path="/Cart" component={Cart} />
        <ProtectedRoute path="/CartBag" component={Cartbag} />
        <ProtectedRoute path="/orderSucess" component={Ordersucess} />
      </Switch>
    </BrowserRouter>


  );
}

export default App;
