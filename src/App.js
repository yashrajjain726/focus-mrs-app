
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Lectures from "./pages/lectures";
import Login from './pages/login'
import SignUp from './pages/signUp'
import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
export default class App extends React.Component {
  state={}
  componentDidMount() {
    axios.get("lectures").then(
      (res) => {
        console.log(res.data,'res daata in  lecures page')
       this.setLectures(res.data)
      },
      (err) => {
        console.log(err);
      }
    );
  }

  setLectures = lectures =>{
    this.setState({
      lectures:lectures
    })
    console.log('setstate',lectures)

  }
  render(){

  
  return (
    <div className="App">
      <Router>
          <Switch>
          <Route exact path="/">
    <Redirect to="/login" />
    </Route>
          <Route exact path="/" component={Login}/>
          <Route exact path="/login" component={()=><Login setLectures={this.setLectures}/>}/>
            <Route exact path="/lectures" component={()=><Lectures lectures={this.state.lectures}/>} />

            <Route exact path="/signup" component={SignUp}/>
          </Switch>
        </Router>
    </div>
  );
  }
}
