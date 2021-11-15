import React,{Fragment, useContext, useState} from 'react';
import Timer from './game_components/timer';
import LifeLines from './game_components/lifelines';
import Question from './game_components/questions';
import Buttons from './game_components/buttoncontroller';
import Answers from './game_components/answers';
import { GameContext } from './game_components/global/contexts';

export default function Start(props){

    const [timer, setTimer] = useState(1500);
    const [questionNumber, setQuestionNumber] = useState(0);
    const {answerLog, setAnswerLog} = useContext(GameContext);
    const {qAndA, setQAndA} = useContext(GameContext);
    const {gameState, setGameState} = useContext(GameContext);
    const [fiftyLifeLineDisable, setFiftyLifeLineDisable] = useState(false);
    const [addTimeDisable, setAddTimeDisable] = useState(false);
    const [timeLifeLine, setTimeLifeLine] = useState(1);
    const [fiftyLifeLine, setFiftyLifeLine] = useState(1);
    const [roundTime, setRoundTime] = useState(1500);

    return (
<Fragment>
  <GameContext.Provider value={{timer, setTimer, qAndA, setQAndA, questionNumber, setQuestionNumber, answerLog, setAnswerLog, gameState, setGameState, fiftyLifeLineDisable, setFiftyLifeLineDisable, addTimeDisable, setAddTimeDisable, timeLifeLine, setTimeLifeLine, fiftyLifeLine, setFiftyLifeLine, roundTime, setRoundTime}}>
    <div className="Timer">
          <Timer/>
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