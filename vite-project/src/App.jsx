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

  state = {
    todoData: [
      
      {
        id: 1,
        title : "공부하기",
        isDone : true,
      },
      {
        id : 2,
        title : "옵치하기",
        isDone : false,
      }
    ],
    value: ""
  }

  deleteTodo = (id) => {
    let todo = this.todoData.filter(data => data.id !== id);
    console.log(todo);
  }
  
  render() {

    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h2>할 일 목록</h2>
          </div>
        
        {this.todoData.map((data) => (
          <div style={this.bottomBorder()} key={data.id}>
            
            <input type="checkbox" defaultChecked={data.isDone}></input>
              {data.title}
            <button className="cancelBox" onClick={this.deleteTodo(data.id)}>X</button>

          </div>
        ))}
        </div>

      </div>
    );
  }
}