import React, { useEffect, useState, useContext } from 'react';
import { GameContext } from './global/contexts';



export default function Timer(){

   // const [timer, setTimer] = useState(15);

    const {timer, setTimer} = useContext(GameContext);
    const {timesUp, setTimesUp} = useContext(GameContext);
    const {qAndA, setQAndA} = useContext(GameContext);


    useEffect(()=>{
        if (timer === 0) {
            setTimesUp(true);
             return;
        }  
        const interval = setInterval(()=>{
            setTimer((prev)=> prev-1);
        },1000);
        
        return () => clearInterval(interval);
    })
    

    return (
        <p>{timer}</p>
    )};