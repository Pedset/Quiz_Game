import React from 'react';




export default function Menu(props){

    return (
        <div>
          <p>
               <button onClick={ () => props.changeGameState("start")}>Start</button>
          </p>
        </div>
    )
}