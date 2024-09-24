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
  };

  handleChange = (e) => { //할일 추가 form 변경될 때
    console.log(e.target.value);
    this.setState({value : e.target.value})
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let newTodoData = {
      id: Date.now(),
      title : this.state.value,
      completed : false,
    };

    console.log(newTodoData.id);

    // 원래있던 투두에 할일 더해주기 (전개연산자)
    this.setState({todoData : [...this.state.todoData, newTodoData]})

  }

  deleteTodo = (id) => {

    // 버튼을 누른 부분만 제외한 모든 투두 데이터를 담음
    let newTodoData = this.state.todoData.filter(data => data.id !== id);
    this.setState({todoData : newTodoData});
  };
  
  render() {

    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h2>할 일 목록</h2>
          </div>

          <form style = {{display : 'flex'}} onSubmit={this.handleSubmit}>

            <input 
              type="text" 
              name="value"
              style = {{flex: '10', padding : '5px'}}
              placeholder="할 일을 입력하세요."
              value = {this.state.value}
              onChange={this.handleChange}
            />

            <input
              type="submit" 
              value="입력"
              className="submitBtn" 
              style = {{flex:1}}  
            />
          </form>
        
        {this.state.todoData.map((data) => (
          <div style={this.bottomBorder()} key={data.id}>
            
            <input type="checkbox" defaultChecked={data.isDone}></input>
              {data.title}
            <button className="cancelBox" onClick={() => this.deleteTodo(data.id)}>X</button>

          </div>
        ))}

        </div>
      </div>
    );
  }
}