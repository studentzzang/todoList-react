import './style.css'
import {useState} from "react";

export default function App(){

  const bottomBorder = (completed) => {
    return {
      padding : "10px",
      borderBottom : "1px #ccc dotted",
      textDecoration : completed ? "line-through" : "none",
    };
  };

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => { //할일 추가 form 변경될 때
    setValue(e.target.value);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title : value,
      completed : false,
    };
  
    // 원래있던 투두에 할일 더해주기 (전개연산자)

    setTodoData(prev =>
      [...prev, newTodo]
    );

    setValue(""); //이건뭐지
  }

  const handleCompleted = (id) => {
    let newTodoData = todoData.map((data) => {

      if (data.id === id) {
        data.completed = !data.completed;
      }
      

      return data;
    });
    setTodoData(newTodoData);

    setTodoData(newTodoData);
  };

  const deleteTodo = (id) => {

    // 버튼을 누른 부분만 제외한 모든 투두 데이터를 담음
    let newTodoData = todoData.filter(data => data.id !== id);
    setTodoData(newTodoData);
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h2>할 일 목록</h2>
        </div>

        <form style = {{display : 'flex'}} onSubmit={handleSubmit}>

          <input 
            type="text" 
            name="value"
            style = {{flex: '10', padding : '5px'}}
            placeholder="할 일을 입력하세요."
            value = {value}
            onChange={handleChange}
          />

          <input
            type="submit" 
            value="입력"
            className="submitBtn" 
            style = {{flex:1}}  
          />
        </form>
      
      {todoData.map((data) => (
        <div style={bottomBorder(data.completed)} key={data.id}>
          <input 
            type="checkbox"
            defaultChecked={data.completed}
            onChange = {() => handleCompleted(data.id)}
          />
          {data.title}
          <button className="cancelBox" onClick={() => deleteTodo(data.id)}>X</button>

        </div>
      ))}

      </div>
    </div>
  );
}
