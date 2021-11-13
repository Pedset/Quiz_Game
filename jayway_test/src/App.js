
import './App.css';
import React, {useState, useContext, useEffect} from 'react';
import Menu from './components/menu'
import Start from './components/gameplay'
import Results from './components/results'
import axios from 'axios';
import { GameContext} from './components/game_components/global/contexts'


function App() {
  const fileURL = "data.json";
  const [gameState, setGameState] = useState("menu");
  const [qAndA, setQAndA] = useState([]);

  
  function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

useEffect(()=>{
axios.get(fileURL)
.then(res =>{
  console.log(res);
console.log(shuffle(res.data.qaa));




})
.catch(err =>{
  console.log(err);
})

},[]);

const loadQuestions = () =>{
   

 }
  function viewPage(){
    switch(gameState){
      case "start": {

        return <Start/>;
      }
      case "Results": {
        return <Results/>;
      }
      default: {
        return <Menu 
        
        changeGameState = {(state) =>
        setGameState(state)}


          
          />;
      }
    }
  }

  return (
    <div className="App">
     <h1>Quiz game</h1>
     <br></br>
     {viewPage()}
     
    </div>    
  );
}

export default App;
