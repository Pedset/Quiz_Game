import React, { Fragment, useState , useContext, useEffect} from 'react';
import { GameContext } from './game_components/global/contexts';



export default function Results(){

    const {qAndA, setQAndA} = useContext(GameContext);
    const {answerLog, setAnswerLog} = useContext(GameContext);
    const [fastestTime, setFastestTime] = useState({time: 15, question: 0 , img: null});
    const [slowestTime, setSlowestTime] = useState({time: 0, question: 0 , img: null});
    const [totalUnanswered, setTotalUnanswered] = useState(0);
    const [totalCorrect, setTotalCorrect] = useState(0);
    const [totalWrong, setTotalWrong] = useState(0);
    const [avgTime, setAvgTime] = useState(0);



    useEffect(()=>{
       console.log(answerLog);
        let totalUnanswered = 0;
        let answerTimes = [];
        let totalWrong = 0;
        let totalCorrect = 0;
        let fastestTime = {time: 15, question: 0 , img: null};
        let slowestTime = {time: 0, question: 0 , img: null};
       answerLog.forEach(element => {
           if(element.passed === null) totalUnanswered++;
           else answerTimes.push(element.answeredTime);
           if(element.passed === false) totalWrong++;
           if(element.passed === true) totalCorrect++;
           if(element.answeredTime < fastestTime.time && element.passed != null){
               fastestTime = {time : element.answeredTime, question : qAndA[element.questionNumber].question , img : qAndA[element.questionNumber].img ? (qAndA[element.questionNumber].img) : null};
           }
           if(element.answeredTime > slowestTime.time && element.passed != null){
            slowestTime = {time : element.answeredTime, question : qAndA[element.questionNumber].question , img : qAndA[element.questionNumber].img ? (qAndA[element.questionNumber].img) : null};
           }
       });
       
       setTotalUnanswered(totalUnanswered);
       setTotalWrong(totalWrong);
       setTotalCorrect(totalCorrect);
       setFastestTime(fastestTime);
       setSlowestTime(slowestTime);
       setAvgTime(answerTimes.reduce((a, b) => a + b) / answerTimes.length);
    },[])


    return (
       <Fragment>
           <p>Statistics</p>
           <p>Your fastest question answered was {fastestTime.time} sec for the question: </p>
           <p>{fastestTime.question}</p>
           <p>{fastestTime.img ? (<img src={fastestTime.img}></img>) : null }</p>
           <br></br>
           <p>Your slowest question answered was {slowestTime.time} sec for the question: </p>
           <p>{slowestTime.question}</p>
           <p>{slowestTime.img ? (<img src={slowestTime.img}></img>) : null }</p>
           <br></br>
            <p>Total unanswered questions : {totalUnanswered}</p>
            <p>Total correct answers : {totalCorrect}</p>
            <p>Total wrong answers : {totalWrong}</p>
            <p>Average time for each question answered: {parseFloat(avgTime).toFixed(2)} sec</p>
       </Fragment>
    )
}