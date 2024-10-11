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
    todoData : [
      {
        id: 1,
        title : "먹기",
        isDone : true,
      },
      {
        id : 2,
        title : "잠자기",
        isDone : false,
      },
    ],
    value: "",
  };
  
  deleteTodo = (id) => { //투두 x버튼으로 지우기
    let todo = this.state.todoData.filter(data => data.id !== id); // 버튼이 눌린부분 data의 id가 아닌 것만 반환 = 제외
    this.setState({todoData : todo});
  }

  handleChange = (e) => { // 투두 추가하기
    
    e.preventDefault(); // form 안의 input 전송시 페이지 리로드 막음

    this.setState({value : e.target.value});
  }
  
  render() {

    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h2>할 일 목록</h2>
          </div>
        
        {this.state.todoData.map((data) => (
          <div style={this.bottomBorder()} key={data.id}>
            
            <input type="checkbox" defaultChecked={data.isDone}></input>

              {data.title}

            <button className="cancelBox" 
            onClick={() => this.deleteTodo(data.id)}>X</button>

          </div>
        ))}

        <form style={{display : 'flex'}}>

          <input
            type="text" 
            name="value" 
            style = {{flex:10, padding : '5px'}}
            placeholder="할 일을 입력하세요."
            value = {this.state.value}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="입력"
            className = "smbmitBtn"
            style = {{flex : 1}}
          />
        </form>

        </div>

      </div>
    );
  }
}