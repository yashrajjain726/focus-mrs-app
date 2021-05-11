import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Lectures from "./pages/lectures";
import Login from './pages/login'
import SignUp from './pages/signUp'

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
          <Route exact path="/login" component={Login}/>
            <Route exact path="/account" component={Lectures} />

            <Route exact path="/signup" component={SignUp}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
