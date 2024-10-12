export default function Form({handleSubmit, value, setValue}){

    const handleChange = (e) => { //할일 추가 form 변경될 때
        setValue(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="flex pt-2">
          <input 
            className="w-full px-3 py-2 mr-4 text-gray-500 border rounded"
            type="text"
            name="value"
            placeholder="할 일을 입력하세요."
            value = {value}
            onChange={handleChange}
          />

          <input
            className="p-2 text-blue-400 border rounded
            hover:text-white hover:bg-purple-300 duration-100"
            type="submit" 
            value="입력"
            style = {{flex:1}}  
          />
        </form>
    )
}