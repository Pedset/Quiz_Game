import React,{Fragment, useContext} from 'react';
import { GameContext } from './global/contexts';


export default function Question(){
    const {qAndA} = useContext(GameContext);
    const {questionNumber} = useContext(GameContext);

    return (

<Fragment>
        <div data-testid="question_div" className="question-container">

        <p>{qAndA[questionNumber].question}</p>
        {qAndA[questionNumber].img ? (<img alt="question_img" src={qAndA[questionNumber].img}></img>) : null }

        </div>
        
       
</Fragment>

    )};