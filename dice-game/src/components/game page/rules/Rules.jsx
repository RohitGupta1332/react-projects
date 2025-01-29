import React from "react";
import './style.css'

const Rules = () => {
    return (
        <div className="rules-container">
            <h2>How to play?</h2>
            <div className="rules">
                <ul>
                    <li>Select any number</li>
                    <li>Click on dice image</li>
                    <li>After click on  dice  if selected number is equal to dice number you will get same point as dice </li>
                    <li>If you get wrong guess then  2 point will be dedcuted </li>
                </ul>
            </div>
        </div>
    )
}

export default Rules;