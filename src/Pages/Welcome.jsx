import styles from '../Pages/Welcome.css'
import Quiz from '../img/quiz.svg'
import { Contextcreate } from '../Contexto/Quiz'
import { useContext } from 'react'


const Welcome = () => {

  const [quizState,dispatch] = useContext(Contextcreate)
 


 
  return (
    <div id="welcome">
      <h1>Welcome</h1>
      <p>clique em baixo para começar</p>

      <button  onClick={()=>dispatch({type:"CHANGE_STAE"})}>  iniciar</button>

      <img src={Quiz} alt="inico" />
 
    </div>
  
  )
}

export default Welcome