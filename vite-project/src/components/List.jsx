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
                    <div className="flex items-center justifi-between w-full px-4 py-1 my-2
                    text-slate-200 bg-slate-400 border rounded">
                        <input 
                            type="checkbox"
                            defaultChecked={data.completed}
                            onChange = {() => handleCompleted(data.id)}
                        />
                        {data.title}
                        <button onClick={() => deleteTodo(data.id)}>X</button>
                    </div>
                </div>
            ))}
        </div>
    );
}