import React,{Fragment, useContext} from 'react';
import { GameContext } from './global/contexts';

export default function Answers(){
    const {questionNumber, setQuestionNumber} = useContext(GameContext);
    const {qAndA, setQAndA} = useContext(GameContext);
    const {timer, setTimer} = useContext(GameContext);
    const {answerLog, setAnswerLog} = useContext(GameContext);

    const testingButton = (e)=>{
        if(qAndA[questionNumber].solution === e){
            console.log("correct");
        }else{
            console.log("wrong");
        }
    }

    const listItems = qAndA[questionNumber].answers.map((answer) => <li key={answer.id}><button onClick={()=> testingButton(answer.id)} value={answer.id}>{answer.answer}</button></li>);
    return (
<Fragment>
            <div>
                {listItems}
            </div>
</Fragment>

    )};