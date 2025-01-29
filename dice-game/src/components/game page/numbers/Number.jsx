import React from "react";
import "./style.css";

const Number = ({number, setNumber, isNumberClicked}) => {
    return(
        <div className="number-container" onClick={() => {setNumber(number)}} style={{background: isNumberClicked? "#000000": "white", color: isNumberClicked? "white": "#000000"}} >
            {number}
        </div>
    )
}

export default Number;