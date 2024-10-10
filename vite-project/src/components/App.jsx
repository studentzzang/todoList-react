import './style.css'
import {useState} from "react";
import List from './List.jsx';
import Form from './Form.jsx'

export default function App(){

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  
  // 원래있던 투두에 할일 더해주기 (전개연산자)
  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
        id: Date.now(),
        title : value,
        completed : false,
    };
  
    setTodoData(prev => [...prev, newTodo]);

    setValue(""); //이건뭐지

  }

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h2>할 일 목록</h2>
        </div>

        <List todoData={todoData} setTodoData={setTodoData}/>

        <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>

      </div>
    </div>
  );
}
