import React from "react";
import Number from './Number.jsx'

const numbers = [1, 2, 3, 4, 5, 6];

const SelectNumber = ({setNumber /*change the color on clicking the number*/, clickedNumber}) => {



    return (
        <div className="select-number-container">
            {
                numbers.map((number) => (
                    <Number key={number} number={number} setNumber={setNumber} isNumberClicked={clickedNumber === number}/>
                ))
            }
        </div>
    )
}

export default SelectNumber;