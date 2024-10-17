import {DragDropContext, Draggable} from "react-beautiful-dnd";

export default function List({todoData, setTodoData}){

    const handleCompleted = (id) => {
        let newTodoData = todoData.map((data) => {

            if (data.id === id) {
            data.completed = !data.completed;
            }

            return data;
            });
        setTodoData(newTodoData);
    };

    const deleteTodo = (id) => {

        // 버튼을 누른 부분만 제외한 모든 투두 데이터를 담음
        let newTodoData = todoData.filter(data => data.id !== id);
        setTodoData(newTodoData);
    };


    return (  
      <div>
        {todoData.map((data) => (
          <div key={data.id}>
            <div className="flex items-center justify-between w-full px-4 py-1 my-2
            text-slate-200 bg-slate-400 border rounded">
              <div className="items-center">
                <input 
                  type="checkbox"
                  defaultChecked={data.completed}
                  onChange = {() => handleCompleted(data.id)}
                />
                <span className={data.completed ? "line-through" : "None"}>{data.title}</span>
              </div>
            <div className="items-center">
              <button className="px-4 py-2 float-right" onClick={() => deleteTodo(data.id)}>X</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}