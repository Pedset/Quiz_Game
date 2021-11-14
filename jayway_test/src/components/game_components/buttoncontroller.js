import React, {Fragment, useContext, useEffect} from 'react';
import { GameContext } from './global/contexts';


export default function Buttons(){

    const {timer, setTimer} = useContext(GameContext);
    const {qAndA, setQAndA} = useContext(GameContext);
    const {questionNumber, setQuestionNumber} = useContext(GameContext);
    const {gameState, setGameState} = useContext(GameContext);
    const {answerLog, setAnswerLog} = useContext(GameContext);
    const {timeLifeLine, setTimeLifeLine} = useContext(GameContext);
    const {fiftyLifeLine, setFiftyLifeLine} = useContext(GameContext);
    const {fiftyLifeLineDisable, setFiftyLifeLineDisable} = useContext(GameContext);
    const {addTimeDisable, setAddTimeDisable} = useContext(GameContext);
    const {roundTime, setRoundTime} = useContext(GameContext);

    useEffect(()=>{
        if (timer === 0) {
            submitAnswer();
            return;
        }  
    })

    const submitAnswer = () =>{
        let ansObj = {
            "questionNumber" : questionNumber,
            "answeredTime"   : (roundTime-timer)/100,
            "passed"           : null,     
        }
        setAnswerLog((answerLog) => ([...answerLog, ansObj]));
        loadNextQuestion();
    }

    const loadNextQuestion =() =>{
        if(questionNumber < 9){
                if(timeLifeLine >0) setAddTimeDisable(false);
                if(fiftyLifeLine >0) setFiftyLifeLineDisable(false);
                document.querySelectorAll("#ansBtns").forEach((e)=>{
                    e.disabled = false;
                })
                setRoundTime(1500);
                setTimer(1500);
                setQuestionNumber(questionNumber+1);
        }else{
            setGameState("results");
        }
    }

    return (
<Fragment>
         <button onClick={()=> window.location.reload()}>Quit game</button>
         <button onClick={()=>submitAnswer()}>Next Question</button>
</Fragment>

    )};