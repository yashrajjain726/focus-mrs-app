import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { Typography, Checkbox } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  root: {
    flexGrow: 1,
    position: "absolute",

    left: "0%",
    right: "0%",
    botton: "0%",
    borderRadius: "20px 20px 0 0",
    height:'60vh'
    
  
  },
}));

export default function LoginCard() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  const axios = require("axios");
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Update the login using the  API
  async function login() {
    const item = { username, password };
    axios({
      method: "post",
      url: "https://focusmrs.tech/focusmrs/api/lectures?page=1&limit=10",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => {
        console.log("res is ", res);
      })
      .then((data) => {
        console.log("data is yash", data);
      });
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <TextField
          id="standard-full-width"
          label="Username"

          style={{ margin: 8 }}
          placeholder="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Password"
          style={{ margin: 8 }}
          placeholder="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <a>
          <Typography
            align="right"
            style={{ margin: "1%", color: "#000", fontWeight: "bold" }}
          >
            Forgot Password ?
          </Typography>
        </a>
      </CardContent>

      <CardContent>
        <div>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
            style={{ float: "left", padding: "0px" }}
            
          />
          <Typography
            style={{ fontWeight: "bold", float: "left", marginLeft: "2%" }}
          >
            Remember and keep me logged in
          </Typography>
        </div>
        <Button
          size="large"
          onClick={login}
          style={{
            backgroundImage:'linear-gradient(180deg, #01ab98, #59b860)',
            paddingRight: "20%",
            paddingLeft: "20%",
            marginTop: "2%",
            color: "white",
            width: "100%",
          }}
        >
          SIGN IN
        </Button>
      </CardContent>
    </Card>
  );
}
