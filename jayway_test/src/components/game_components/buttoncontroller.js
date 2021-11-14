import React, {Fragment, useContext, useEffect} from 'react';
import { GameContext } from './global/contexts';


export default function Buttons(){

    const {timer, setTimer} = useContext(GameContext);
    const {qAndA, setQAndA} = useContext(GameContext);
    const {questionNumber, setQuestionNumber} = useContext(GameContext);
    const {gameState, setGameState} = useContext(GameContext);
    const {answerLog, setAnswerLog} = useContext(GameContext);

    useEffect(()=>{
        if (timer === 0) {
            loadNextQuestion();
            return;
        }  
    })

    const loadNextQuestion =() =>{
        if(questionNumber < 9){
                let ansObj = {
                    "questionNumber" : questionNumber,
                    "answeredTime"   : (1500-timer)/100,
                    "passed"           : null,     
                }
                setAnswerLog((answerLog) => ([...answerLog, ansObj]));
                setTimer(1500);
                setQuestionNumber(questionNumber+1);
                
        }else{
            setGameState("results");
        }
        
    }

    return (
<Fragment>
         <button>Quit game</button>
         <button onClick={()=>loadNextQuestion()}>Next Question</button>
</Fragment>

    )};