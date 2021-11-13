import React, { Fragment, useState , useContext, useEffect} from 'react';
import { GameContext } from './game_components/global/contexts';



export default function Results(){

    /*
    const [avgTime, setAvgTime] = useState(0);
    const [totalCorrect, setTotalCorrect] = useState(0);
    const [totalWrong, setTotalWrong] = useState(0);
    const [totalUnanswered, setTotalUnanswered] = useState(0);
    const [fastestTime, setFastestTime] = useState({time:0,question:0});
    const [slowestTime, setSlowestTime] = useState({time:0,question:0});
   */
    const {answerLog, setAnswerLog} = useContext(GameContext);
    const [fastestTime, setFastestTime] = useState({});
    const [slowestTime, setSlowestTime] = useState({});
    const [totalUnanswered, setTotalUnanswered] = useState(0);
    const [totalCorrect, setTotalCorrect] = useState(0);
    const [totalWrong, setTotalWrong] = useState(0);
    const [avgAnswerTime, setAvgAnswerTime] = useState([]);



    useEffect(()=>{
       console.log(answerLog);

       answerLog.forEach(element => {
           if(element.passed === null) setTotalUnanswered(totalUnanswered+1);
           else setAvgAnswerTime(avgAnswerTime => ([...avgAnswerTime, element.answeredTime]))
           if(element.passed === false) setTotalWrong(totalWrong+1);
           if(element.passed === true) setTotalCorrect(totalCorrect+1);
       });

//find out slowest and fastest time + avg

    },[])



    return (
       <Fragment>
            <p>hi</p>
       </Fragment>
    )
}