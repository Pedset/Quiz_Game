import React, {Fragment, useContext, useEffect} from 'react';
import { GameContext } from './global/contexts';


export default function Buttons(){

    const {timer, setTimer} = useContext(GameContext);
    const {questionNumber, setQuestionNumber} = useContext(GameContext);
    const {setGameState} = useContext(GameContext);
    const {setAnswerLog} = useContext(GameContext);
    const {timeLifeLine} = useContext(GameContext);
    const {fiftyLifeLine} = useContext(GameContext);
    const {setFiftyLifeLineDisable} = useContext(GameContext);
    const {setAddTimeDisable} = useContext(GameContext);
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
        }else setGameState("results");
    }

    return (
        <Fragment>
                <button className="quit_btn" onClick={()=> window.location.reload()}>Quit game</button>
                <button className="submit_btn" onClick={()=>submitAnswer()}>Next Question</button>
        </Fragment>
    )};