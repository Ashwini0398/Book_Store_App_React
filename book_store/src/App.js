import './App.css';
import LoginDashboard from './Pages/LoginSignupDashboard/LoginSignup'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {ProtectedRoute} from '../src/Services/auth/protectedRoutes';
import Home from './Components/Home/Home';
function App() {
  return (
    <BrowserRouter>
      < Switch>
        <Route path="/LoginSignUp" component={LoginDashboard} />
        <ProtectedRoute path="/Home" component={Home} />
      </Switch>
    </BrowserRouter>


  );
}

export default App;
