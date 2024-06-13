
import { createContext } from "react"
import { useReducer } from "react"
import questions from '../data/questions'


export const Contextcreate = createContext()  // criar contexto

const stage = ["play","game", "end"]


const jogando= {
    Estagio : stage[0],
    questions,
    currentQuestoes:0,
    score:0,
    aswselected :false

    

}


const reducerJogo = (state,action )=>{
  console.log(state,action)
     
      switch(action.type){
        case  "CHANGE_STAE":
      
        return {
        ...state,
        Estagio: stage[1]
        };

        case "REODER_QUESTIONS":
        const reordenar = questions.sort(()=>{
          return Math.random() - 0.5;
        })
        return {
          ...state,
          questions:reordenar,

        }

        case "NEXT_QUESTIONS":
        const nextQuestion = state.currentQuestoes +1
        let endGame = false

        if(!questions[nextQuestion]){
          endGame= true
        }
        
        return {
          ...state,
          currentQuestoes : nextQuestion,
          Estagio :endGame? stage[2]:state.Estagio,
          aswselected:false,
        };

        case "ESTAGIO_INICIAL":
          return jogando;

        case "CHECKAR_RESPOSTA":
          if(state.aswselected) return state
        const answer1 = action.payload.answer;
        const option1 = action.payload.option;
        let correctanswr = 0

        if(answer1 === option1) correctanswr = 1
        return{
          ...state,
          score: state.score + correctanswr,
          aswselected:option1,



        }




        default :
        return state;


      }

}


export const ContextProvider = ({children})=>{

 const valor = useReducer(reducerJogo,jogando)

 return <Contextcreate.Provider value={valor} >
    
    {children}

  </Contextcreate.Provider>



}
