import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import HomePage from "./pages/homepage";
import Login from './pages/login'
import SignUp from './pages/signUp'

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/account" component={HomePage} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
