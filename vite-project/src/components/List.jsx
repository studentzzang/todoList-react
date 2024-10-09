
export default function List({todoData, setTodoData}){

    const bottomBorder = (completed) => {
        return {
            padding : "10px",
            borderBottom : "1px #ccc dotted",
            textDecoration : completed ? "line-through" : "none",
        };
    };

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
    );
}