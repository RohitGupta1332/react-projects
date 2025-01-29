import React from "react";
import Button from "./Button.jsx"
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="top-container">
            <div className="left-section">
                <img src="/images/dices.png" alt="dices image" />
            </div>
            <div className="right-section">
                <h1>Dice Game</h1>
                <Link to="/game">
                    <Button text={"Play Game"} bgColor={"#000000"} textColor={"white"}></Button>
                </Link>
            </div>
        </div>
    )
}

export default Home;