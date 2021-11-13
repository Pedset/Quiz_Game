import React,{Fragment, useContext} from 'react';
import { GameContext } from './global/contexts';


export default function Question(props){
    const {qAndA, setQAndA} = useContext(GameContext);
    const {questionNumber, setQuestionNumber} = useContext(GameContext);

    return (

<Fragment>
        <p>{qAndA[questionNumber].question}</p>
        {qAndA[questionNumber].img ? (<img className="qimg" src={qAndA[questionNumber].img}></img>) : null }
       
</Fragment>

    )};