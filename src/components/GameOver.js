import { useState } from 'react';
import styled from 'styled-components'
import { Button } from './Button'

const Title = styled.h1`
    margin-top: 4em;
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
`;

const GameOver = ({ pts, num, quizes }) => {
    const [showAnws, setShowAns] = useState(false);
    const refreshPage = () => window.location.reload();

    return (
        <>
            <Title>Congratz <br></br> 🎉🎊🎉</Title>
            <h2 className='tttll'>Quiz is Over </h2>
            <Points>Your score is {pts}/{num}!</Points>
            <div className='butns'>
                <Button onClick={refreshPage}>Retry</Button>
                <Button onClick={() => setShowAns(true)}>Show all answers</Button>
            </div>
            {showAnws && <div className='answersList'>
                {
                    quizes.map((item, index) => <div key={index}>
                        <h2>{item.question}</h2>
                        <p>{item.answer}</p>
                    </div>)
                }
            </div>
            }

        </>
    )
}

export default GameOver
