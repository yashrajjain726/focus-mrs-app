import React from "react";
import Card from "@material-ui/core/Card";
import axios from "axios";
import { Redirect,Link } from "react-router-dom";

export default class ForgotCard extends React.Component {
  state = {};
  // Update the login using the  API
  handleSubmit = (e) => {
    e.preventDefault();

   
  };
  render() {
      return (
        <Card className="forgot-card">
          <form onSubmit={this.handleSubmit}>
          <p style={{fontSize:'25px',fontWeight:'bold'}}>Forgot Password ?</p>
            <div className="form-group m-3">
              <label style={{ float: "left",marginBottom:'3%' }}>Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={(e) => (this.email = e.target.value)}
              ></input>
            </div>
            <button
              className="btn btn-primary btn-block "
              style={{
                width: "80%",
                backgroundImage: "linear-gradient(180deg, #59b860, #01ab98)",
                border: "0px",
                marginTop: "5%",
              }}
            >
              SUBMIT
            </button>
            
          </form>
        </Card>
      );
    }
}
