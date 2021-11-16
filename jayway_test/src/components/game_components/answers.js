import React,{Fragment, useContext} from 'react';
import { GameContext } from './global/contexts';

export default function Answers(){
    const {questionNumber, setQuestionNumber} = useContext(GameContext);
    const {qAndA} = useContext(GameContext);
    const {timer, setTimer} = useContext(GameContext);
    const {setAnswerLog} = useContext(GameContext);
    const {setGameState} = useContext(GameContext);
    const {timeLifeLine} = useContext(GameContext);
    const {fiftyLifeLine} = useContext(GameContext);
    const {setFiftyLifeLineDisable} = useContext(GameContext);
    const {setAddTimeDisable} = useContext(GameContext);
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
        }else setGameState("results");
    }

    const listItems = qAndA[questionNumber].answers.map((answer) => <li key={answer.id}><button data-testid="ans_btn" id="ansBtns" className={"ansBtn"+answer.id} onClick={()=> checkAns(answer.id)} value={answer.id}>{answer.answer}</button></li>);
    return (
        <Fragment>
                    <div className="answers-container">
                        {listItems}
                    </div>
                    <hr></hr>
        </Fragment>

    )};