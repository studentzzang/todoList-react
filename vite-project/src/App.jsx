
import './style.css'
import {useState} from "react";
import List from './List';

export default function App(){

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

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h2>할 일 목록</h2>
        </div>

        <List todoData={todoData} setTodoData={setTodoData}/>

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

      </div>
    </div>
  );
}
