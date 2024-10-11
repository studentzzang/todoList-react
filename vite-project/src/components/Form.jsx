export default function Form({handleSubmit, value, setValue}){

    const handleChange = (e) => { //할일 추가 form 변경될 때
        setValue(e.target.value);
    };

    return (
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
    )
}