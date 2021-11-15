import React, { Fragment, useState , useContext, useEffect} from 'react';
import { GameContext } from './game_components/global/contexts';



export default function Results(){

    const {qAndA} = useContext(GameContext);
    const {answerLog} = useContext(GameContext);
    const [fastestTime, setFastestTime] = useState({time: 25, question: null , img: null});
    const [slowestTime, setSlowestTime] = useState({time: 0, question: null , img: null});
    const [totalUnanswered, setTotalUnanswered] = useState(0);
    const [totalCorrect, setTotalCorrect] = useState(0);
    const [totalWrong, setTotalWrong] = useState(0);
    const [avgTime, setAvgTime] = useState(null);



    useEffect(()=>{
        let totalUnanswered = 0;
        let answerTimes = [];
        let totalWrong = 0;
        let totalCorrect = 0;
        let fastestTime = {time: 25, question: 0 , img: null};
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
       
       if (answerTimes !== undefined && answerTimes.length !== 0) {
          setAvgTime(answerTimes.reduce((a, b) => a + b) / answerTimes.length); 
       }
       
    },[])


    return (
       <Fragment>
           <h3>Statistics</h3>

           {fastestTime.question ? (<p>Your fastest question answered was {fastestTime.time} sec for the question: </p>) : null}

           <div className="question-container">
           {fastestTime.question ? (<p>{fastestTime.question}</p>) : null}
           {fastestTime.question ? (<p>{fastestTime.img ? (<img alt="question_img" src={fastestTime.img}></img>) : null }</p>) : null}
           </div>

           {slowestTime.question ? (<p>Your fastest question answered was {slowestTime.time} sec for the question: </p>) : null}

           <div className="question-container">
           {slowestTime.question ? (<p>{slowestTime.question}</p>) : null}
           {slowestTime.question ? (<p>{slowestTime.img ? (<img alt="question_img" src={slowestTime.img}></img>) : null }</p>): null}
           </div>

           <br></br>
           <p>Total unanswered questions : {totalUnanswered}</p>
           <p>Total correct answers : {totalCorrect}</p>
           <p>Total wrong answers : {totalWrong}</p>
           <p>Average time for each question answered: {avgTime ? parseFloat(avgTime).toFixed(2) : "Unavailable"} sec</p>
           <br></br>
           <button onClick={()=> window.location.reload()}>Menu</button>
       </Fragment>
    )
}