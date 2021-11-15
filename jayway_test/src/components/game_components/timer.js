import React, { useEffect, useContext } from 'react';
import { GameContext } from './global/contexts';



export default function Timer(){

    const {timer, setTimer} = useContext(GameContext);
    
    useEffect(()=>{
        if (timer === 0) {
             return;
        }  
        const interval = setInterval(()=>{
            setTimer((prev)=> prev-1);
        },10);
        return () => clearInterval(interval);
    })
    
    return (
        <p data-testid="timer">Timer : {Math.floor(timer/100)}</p>
    )};