import React,{Fragment, useContext, useState} from 'react';
import Timer from './game_components/timer';
import LifeLines from './game_components/lifelines';
import Question from './game_components/questions';
import Buttons from './game_components/buttoncontroller';
import Answers from './game_components/answers';
import { GameContext } from './game_components/global/contexts';

export default function Start(props){

    const [timer, setTimer] = useState(15);
    const [timesUp, setTimesUp] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [answerLog, setAnswerLog] = useState([])


    return (
<Fragment>
  <GameContext.Provider value={{timer, setTimer, timesUp, setTimesUp}}>
    <div className="Timer">
          <Timer />
    </div>
    <div className="LifeLines">
          <LifeLines/>
    </div>
    <div className="Question">
          <Question />
    </div>
    <div className="Answers">
          <Answers/>
    </div>
    <div className="Buttons">
          <Buttons/>
    </div>
    </GameContext.Provider>
</Fragment>
        
    )
}