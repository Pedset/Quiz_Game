import React,{Fragment, useState, useContext, useEffect} from 'react';
import { GameContext } from './global/contexts';


export default function LifeLines(){

    const {timer, setTimer} = useContext(GameContext);
    const {questionNumber, setQuestionNumber} = useContext(GameContext);
    const {qAndA, setQAndA} = useContext(GameContext);
    const {timeLifeLine, setTimeLifeLine} = useContext(GameContext);
    const {fiftyLifeLine, setFiftyLifeLine} = useContext(GameContext);
    const {fiftyLifeLineDisable, setFiftyLifeLineDisable} = useContext(GameContext);
    const {addTimeDisable, setAddTimeDisable} = useContext(GameContext);
    const {roundTime, setRoundTime} = useContext(GameContext);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    useEffect(()=>{
        if (timer === 0) {
            if(timeLifeLine > 0) setAddTimeDisable(false);
            if(fiftyLifeLine > 0) setFiftyLifeLineDisable(false);
            document.querySelectorAll("#ansBtns").forEach((e)=>{
                e.disabled = false;
            })
            setRoundTime(1500);
            return;
        }  
    },[])

    const FiftyFifty = () => {
        
       
        if (fiftyLifeLine !== 0){

            let alternative1 = null;
            let alternative2 = null;

                while (alternative1 === null || alternative2 === null || alternative1 === alternative2){
                    let index1 = getRandomInt(4)+1;

                    if(index1 !== qAndA[questionNumber].solution){
                        alternative1 = index1;
                    }
                    let index2 = getRandomInt(4)+1;
                    if(index2 !== qAndA[questionNumber].solution && index2 !== index1){
                        alternative2 = index2;
                    }
                }
            document.querySelector(".ansBtn"+ alternative1 ).disabled = true;
            document.querySelector(".ansBtn"+ alternative2 ).disabled = true;

            setFiftyLifeLineDisable(true);
            setFiftyLifeLine(fiftyLifeLine-1);
        }
    }

    const addTime = () => {
        if(timeLifeLine !== 0){
            setRoundTime(2500);
            setAddTimeDisable(true);
            setTimer(timer + 1000);
            setTimeLifeLine(timeLifeLine-1);
        }
    }



    return (
        <Fragment>
                    <button disabled={fiftyLifeLineDisable} onClick={()=> FiftyFifty()}>50/50 ({fiftyLifeLine})</button>
                    <button disabled={addTimeDisable} onClick={()=>addTime()}>+10 sec ({timeLifeLine})</button>
        </Fragment>
    )};