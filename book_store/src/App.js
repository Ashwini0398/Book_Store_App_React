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
import CartBAG from '../src/Components/Cartbag/Cartbag';
import ForgetPassword from '../src/Components/ForgetPassword/ForgetPassword';
import WishList from './Components/WishList/WishList';


function App() {
  return (
    <BrowserRouter>
      < Switch>
      <ProtectedRoute path="/Dashboard" component={Dashboard} />
      <ProtectedRoute path="/CartBag" component={CartBAG} />
      <ProtectedRoute path="/WishList" component={WishList} />
      <ProtectedRoute path="/orderSucess" component={Ordersucess} />
      <Route path="/ForgetPassword" component={ForgetPassword}></Route>
        
        <Route  path="/" component={LoginDashboard} />    
       
      </Switch>
    </BrowserRouter>


  );
}

export default App;
