import React,{Fragment, useContext} from 'react';
import { GameContext } from './global/contexts';

export default function Answers(){
    const {questionNumber, setQuestionNumber} = useContext(GameContext);
    const {qAndA, setQAndA} = useContext(GameContext);
    const {timer, setTimer} = useContext(GameContext);
    const {answerLog, setAnswerLog} = useContext(GameContext);
    const {gameState, setGameState} = useContext(GameContext);

    const {timeLifeLine, setTimeLifeLine} = useContext(GameContext);
    const {fiftyLifeLine, setFiftyLifeLine} = useContext(GameContext);
    const {fiftyLifeLineDisable, setFiftyLifeLineDisable} = useContext(GameContext);
    const {addTimeDisable, setAddTimeDisable} = useContext(GameContext);
    const {roundTime, setRoundTime} = useContext(GameContext);

    const checkAns = (ans) =>{
        if(qAndA[questionNumber].solution === ans)  submitAnswer(true);
        else                                        submitAnswer(false);
    }

    const submitAnswer = (ans) =>{
        let ansObj = {
            "questionNumber" : questionNumber,
            "answeredTime"   : (roundTime-timer)/100,
            "passed"           : ans,     
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

    const listItems = qAndA[questionNumber].answers.map((answer) => <li key={answer.id}><button id="ansBtns" className={"ansBtn"+answer.id} onClick={()=> checkAns(answer.id)} value={answer.id}>{answer.answer}</button></li>);
    return (
    <Fragment>
                <div>
                    {listItems}
                </div>
    </Fragment>

    )};