import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import ShopIcon from '@material-ui/icons/Shop';
import { Typography,Checkbox  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  root:{
    flexGrow: 1,
    position: "absolute",
    left: "0%",
    right: "0%",
    bottom: "0%",
    borderRadius:'20px 20px 0 0',
    height:'65vh'

  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Card className={classes.root}>
              <CardContent>

<TextField
     id="standard-full-width"
     label="First Name"
     style={{ margin: 8 }}
     placeholder="Enter your First Name"
     fullWidth
     InputLabelProps={{
       shrink: true,
     }}
   />
   <TextField
     id="standard-full-width"
     label="Last Name"
     style={{ margin: 8 }}
     placeholder="Enter your Last Name"
     fullWidth
     InputLabelProps={{
       shrink: true,
     }}
   />
    <TextField
          id="standard-full-width"
          label="Email Address"
          style={{ margin: 8 }}
          placeholder="Enter your Email I'd"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
     id="standard-full-width"
     label="Password"
     style={{ margin: 8 }}
     placeholder="Enter your Password"
     fullWidth
     InputLabelProps={{
       shrink: true,
     }}

   />
   <a>
   <Typography align="right" style={{margin:'1%',color:'#000',fontWeight:'bold'}}>
       Forgot Password ?
   </Typography></a>
   <div >
       <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
       style={{float:'left',padding:'0px'}}
      />
        <Typography style={{fontWeight:'bold',align:'left'}}>By signing up you agree to our <span style={{color:'#bddbdb'}}>conditions</span> and <span style={{color:'#bddbdb'}}>privacy policy</span></Typography>
       </div>
        <Button size="large" style={{backgroundColor:'#fc357b',paddingRight:'20%',paddingLeft:'20%',marginTop:'2%',color:'white',width:'100%'}}>
          SIGN IN
        </Button>
 </CardContent>
        <CardContent>
      
        </CardContent>  
    </Card>
  );
}