import React from 'react'
import { Contextcreate } from '../Contexto/Quiz'
import { useContext } from 'react'
import styles from '../Pages/Questions.css'
import Option from './Option'




const Questions = () => {


  const Onselecionar = (option)=>{
    dispatch({
      type : "CHECKAR_RESPOSTA",
      payload: { answer: currentQuestoes.answer,option}

    })

    }


  const [quizState,dispatch] = useContext(Contextcreate)
  const currentQuestoes =quizState.questions[quizState.currentQuestoes]
  
  return (
    <div  id="question">
      <p>pergunta{quizState.currentQuestoes+1} de {quizState.questions.length}</p>
      <h2>Pergunta atual: {currentQuestoes.question}</h2>
      <p>{currentQuestoes.options.map((option)=>(
        <Option option={option} key={option} answer={currentQuestoes.answer} selecionar={()=>Onselecionar(option)} />
      ))}</p>
      <div id="options-container">opções</div>
      {quizState.aswselected &&(
        <button onClick={() => dispatch({ type: "NEXT_QUESTIONS" })}>
        Continuar </button>
      

      )
    }
      
    </div>
     
  )
}

export default Questions