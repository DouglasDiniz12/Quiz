
import './App.css';
import { Contextcreate } from './Contexto/Quiz';
import GameOver from './Pages/GameOver';
import Questions from './Pages/Questions';
import Welcome from './Pages/Welcome';
import { useContext, useEffect } from 'react';



function App() {
  const [quizState,dispatch] = useContext(Contextcreate)

  useEffect(()=>{
   dispatch({type:"REODER_QUESTIONSgh"});
    


  },[])


   

  return (
    <div className="App">
      <h1>Quiz</h1>
     {quizState.Estagio  === "play" &&  <Welcome/>}
     {quizState.Estagio  === "game" &&  <Questions/>}
     {quizState.Estagio  === "end"  &&   <GameOver/>}
   
    </div>
  );
}

export default App;
