import React  from "react";
import MenuBar from "../components/menuBar";
import Tabs from "../components/tabs";
export default class Lectures extends React.Component {
  render() {
    if(this.props.lectures)
    {
    return (
      
      <div className="account" style={{ color: "#000" }}>
      
        <MenuBar title="Home" setLectures={this.props.setLectures}/>
        <center>
          {console.log(this.props.lectures,"tabs before")}
          <Tabs lectureList={this.props.lectures}/>
        </center>
      </div>
    );
    }
    else{
      return(
        <div>
          {console.log("lectures me lecture reaches",this.props.lectures)}
          <p>Please Login Again</p>
        </div>
        
      )
     
    }
  }
}
