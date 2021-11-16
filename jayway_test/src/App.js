
import './App.css';
import React, {useState, useEffect} from 'react';
import Menu from './components/menu'
import Start from './components/gameplay'
import Results from './components/results'
import axios from 'axios';
import {GameContext} from './components/game_components/global/contexts'


function App() {
  const fileURL = "data.json";
  const [gameState, setGameState] = useState("menu");
  const [qAndA, setQAndA] = useState([]);
  const [answerLog, setAnswerLog] = useState([]);
  const [startDisable, setStartDisable] = useState(false);
  const [errMsg, setErrMsg] = useState();

  function shuffle(sourceArray) {
    for (let i = 0; i < sourceArray.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (sourceArray.length - i));
        let temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
  }

  useEffect(()=>{

    axios.get(fileURL)
    .then(res =>{
      let shuffledQuestions = shuffle(res.data.qaa);
      shuffledQuestions.forEach((element) =>{
      setQAndA((qAndA) => ([...qAndA, element]))
      });
    })
    .catch(err =>{
      setStartDisable(true);
      setErrMsg(err.message);
    })
  },[]);

  function viewPage(){
    switch(gameState){
      case "start":    return <Start/>;
      case "results":  return <Results/>;
      default:         return <Menu/>;
    }
  }

  return (
    <GameContext.Provider value={{qAndA, setQAndA, answerLog, setAnswerLog, gameState, setGameState, startDisable}}>
      <div className="App">
      <h1 className="title">Quiz app</h1>
      <br></br>
      {viewPage()}
      <br></br>
      {errMsg ? (<p className="error_msg" >{errMsg}</p>) : null}
      </div>    
    </GameContext.Provider>
  );
}

export default App;
