import React, { useEffect } from 'react';

function Score(props) {
    const { score, bestScore, checkIfBestScore } = props;

    useEffect(() => checkIfBestScore());

    return (
        <div className="score">
            <div>Score: {score} </div>
            <div>Best Score: {bestScore}</div>
        </div>
    )
};

export default Score;