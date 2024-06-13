import React from 'react'
import { Contextcreate } from '../Contexto/Quiz'
import { useContext } from 'react'
import styles from '../Pages/Option.css'


const Option = ({option,selecionar,answer}) => {
  const [quizState,dispatch] = useContext(Contextcreate)

  return (
    <div className={`option ${quizState.aswselected && option === answer ?"correct" : ""}${quizState.aswselected && option !== answer ?"wrong" : ""}`} onClick={()=>selecionar()}>
      <p>{option}</p>
    </div>
  )
}

export default Option
