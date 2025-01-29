import React, { useEffect, useState } from "react"
import Score from './score/Score.jsx'
import SelectNumber from './numbers/SelectNumber.jsx'
import CenterBox from './center dice/CenterBox.jsx'
import Rules from './rules/Rules.jsx'
import './style.css'
import Button from '../home/Button.jsx'


const GamePage = () => {

    let [showRules, setShowRules] = useState(false)
    let [number, setNumber] = useState(0) //selected number
    let [score, setScore] = useState(0)
    let [dice, setDice] = useState(1)
    const handleRules = () => {
        setShowRules(!showRules)
    }

    function resetScore() {
        setScore(0);
    }

    function rollDice(){
        if(number === 0){
            alert("Please select a number first");
            return;
        }
        let random = Math.floor(Math.random() * 6) + 1;
        setDice(random);
    }

    useEffect(()=>{
        if(dice === number){
            setScore(score + dice);
        }
        else{
            setScore(score - 2)
        }

    },[dice])
    
    return (
        <div className="page-container">
            <div className="header">
                <Score score={score}></Score>
                <SelectNumber setNumber={setNumber} clickedNumber={number}></SelectNumber>
            </div>
            <CenterBox onClick={rollDice} dice={dice}></CenterBox>
            <Button onClick={resetScore} text={"Reset Score"} bgColor={"white"} textColor={"#000000"}></Button>
            <Button text={"Show Rules"} bgColor={"#000000"} textColor={"white"} onClick={handleRules}></Button>
            {showRules ? <Rules/>: null}
        </div>
    )
}

export default GamePage;