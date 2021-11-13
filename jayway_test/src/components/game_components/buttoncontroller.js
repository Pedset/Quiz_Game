import React, {Fragment, useContext, useEffect} from 'react';
import { GameContext } from './global/contexts';


export default function Buttons(){

    const {timer, setTimer} = useContext(GameContext);
    const {timesUp, setTimesUp} = useContext(GameContext);

    useEffect(()=>{
        if (timer === 0) {
            loadNextQuestion();
            return;
        }  
    })

    const loadNextQuestion =() =>{
        setTimer(15);
        setTimesUp(false);
        console.log("hello");
    }

    return (
<Fragment>
         <button>Quit game</button>
         <button onClick={()=>loadNextQuestion()}>Next Question</button>
</Fragment>

    )};