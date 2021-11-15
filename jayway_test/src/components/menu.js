import React, {useContext} from 'react';
import { GameContext } from './game_components/global/contexts';



export default function Menu(){

  const {setGameState} = useContext(GameContext);

  const changeGameState = (state) => {
    setGameState(state);
  }


    return (
        <div>
          <h3>Menu</h3>
          <h4>
            Instructions 
          </h4>
          <p>
            This is a quiz app containing 10 questions.
          </p>
          <p>
               <button data-testid="start_btn" onClick={ () => changeGameState("start")}>Start</button>
          </p>
        </div>
    )
}