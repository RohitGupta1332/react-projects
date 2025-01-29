import React from "react";
import './style.css';
function Button({text, textColor, bgColor, onClick}){
    return (
        <button style={{backgroundColor: bgColor, color: textColor}} onClick={onClick}>{text}</button>
    )
}

export default Button;