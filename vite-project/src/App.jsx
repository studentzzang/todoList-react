import React, {Component} from "react";
import './style.css'

export default class App extends Component{

  bottomBorder = () => {
    return {
      padding : "10px",
      borderBottom : "1px #ccc dotted",
      textDecoration : "none"
    };
  }
  
  render() {

    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h2>할 일 목록</h2>
          </div>
        
          <div style={this.bottomBorder()}>
            <input type="checkbox" defaultChecked={false}></input>
            코딩하기
            <button className="cancelBox">X</button>

          </div>
        </div>

      </div>
    );
  }
}