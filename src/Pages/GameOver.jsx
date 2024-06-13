import React from 'react'
import { useContext } from 'react'
import { Contextcreate } from '../Contexto/Quiz'

import styles from '../Pages/GameOver.css'
import Welldone from '../img/welldone.svg'


function GameOver() {
  const [quizState,dispatch] = useContext(Contextcreate)
  return (
    <div id='gameover'>
         <h2>Fim de jogo</h2>
         <p>pontuação:{quizState.score}</p>
         <p>voce acertou {quizState.score} de {quizState.questions.length} perguntas</p>
         <img src={Welldone} alt="Fim do quiz" />
         <button onClick={()=>dispatch({type:"ESTAGIO_INICIAL"})}> Reiniciar </button>

       

    </div>
  )
}

export default GameOver