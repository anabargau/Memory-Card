import React from 'react';

function Score(props) {
    const { score, bestScore } = props;

    return (
        <div>
            Score: {score} Best Score: {bestScore}
        </div>
    )
};

export default Score;