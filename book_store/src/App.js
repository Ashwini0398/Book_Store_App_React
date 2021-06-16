import './App.css';
import LoginDashboard from './Pages/LoginSignupDashboard/LoginSignup'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <LoginDashboard/>
        {/* < Switch> */}
          {/* <Route exact path="/LoginSignUp" component={LoginDashboard} /> */}
        {/* </Switch> */}
      </BrowserRouter>
    </>

  );
}

export default App;
