import React, { Fragment, useState } from 'react';



export default function Results(){

    const [avgTime, setAvgTime] = useState(0);
    const [totalCorrect, setTotalCorrect] = useState(0);
    const [totalWrong, setTotalWrong] = useState(0);
    const [totalUnanswered, setTotalUnanswered] = useState(0);
    const [fastestTime, setFastestTime] = useState({time:0,question:0});
    const [slowestTime, setSlowestTime] = useState({time:0,question:0});
   

    return (
       <Fragment>
            <div className="avgTime">
                <p> Your average time for each question is {avgTime} seconds</p>
            </div>

            <div className="totalCorrect">
                <p> Your total correct answer is : {totalCorrect} </p>
            </div>

            <div className="totalWrong">
                <p> Your total wrong answer is : {totalWrong} </p>
            </div>

            <div className="totalUnanswered">
                <p> Your total unanswered questions is : {totalUnanswered} </p>
            </div>

            <div className="fastestTime">
                <p> Your fastest question answered was : {fastestTime.time} seconds for question {fastestTime.question} </p>
            </div>

            <div className="slowestTime">
                <p> Your slowest question answered was : {slowestTime.time} seconds for question {slowestTime.question} </p>
            </div>

       </Fragment>
    )
}