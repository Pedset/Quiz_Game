import React, {useContext} from 'react';
import { GameContext } from './game_components/global/contexts';



export default function Menu(){

  const {setGameState} = useContext(GameContext);
  const {startDisable} = useContext(GameContext);

  const changeGameState = (state) => setGameState(state);
  
    return (
        <div>
          <h3>Menu</h3>
          <hr></hr>
          <h4>Instructions</h4>
          <p>This is a quiz app containing 10 questions.</p>
          <hr></hr>
          <button disabled={startDisable} data-testid="start_btn" onClick={ () => changeGameState("start")}>Start</button>
        </div>
    )
}