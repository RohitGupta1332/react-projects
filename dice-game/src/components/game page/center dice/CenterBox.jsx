import React from "react";
import './style.css'
const CenterBox = ({ onClick, dice }) => {
    return (
        <div className="center-box-container">
            <img src={`/images/dice_${dice}.png`}
                alt="dice"
                onClick={onClick} />
            <h2>Click on dice to roll</h2>
        </div>
    )
}

export default CenterBox;