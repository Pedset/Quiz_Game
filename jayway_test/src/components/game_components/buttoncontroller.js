import React, {Fragment, useContext, useEffect} from 'react';
import { GameContext } from './global/contexts';


export default function Buttons(){

    const {timer, setTimer} = useContext(GameContext);
    const {timesUp, setTimesUp} = useContext(GameContext);
    const {qAndA, setQAndA} = useContext(GameContext);
    const {questionNumber, setQuestionNumber} = useContext(GameContext);

    useEffect(()=>{
        if (timer === 0) {
            loadNextQuestion();
            return;
        }  
    })

    const loadNextQuestion =() =>{
        if(questionNumber < 10){
                setTimer(15);
                setTimesUp(false);
                setQuestionNumber(questionNumber+1);
                console.log(qAndA);
                console.log("hello");
        }else{
            // change game state to finished (result)
        }
        
    }

    return (
<Fragment>
         <button>Quit game</button>
         <button onClick={()=>loadNextQuestion()}>Next Question</button>
</Fragment>

    )};