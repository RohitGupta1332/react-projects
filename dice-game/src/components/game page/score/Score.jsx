import React from "react";

const Score = ({score}) => {
    return (
        <div>
            <h2>Score: {score ? score: 0}</h2>
        </div>
    )
}
export default Score;