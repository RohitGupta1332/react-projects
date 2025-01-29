import 'bootstrap/dist/css/bootstrap.min.css';

function Input({setInputs, setDate, inputText, date, setItems, items}){
    function addItems(input, date){
        setItems([...items, {input: input, date: date}])
    }
    return (
        <div className="row">
            <input className="col-6" type="text" name="input" id="" onChange={(e) => setInputs(e.target.value)}/>
            <input className="col-4" type="date" name="" id="" onChange={(e) => setDate(e.target.value)}/>
            <button className="col-2" onClick={() => addItems(inputText, date)}>Add</button>
        </div>
    )
}
export default Input;