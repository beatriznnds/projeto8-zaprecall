import Vector from './img/Vector(1).png'
import {useState} from 'react'
import CardContent from './CardContent'
import correct from './img/correct.png'
import almost from './img/almost.png'
import wrong from './img/wrong.png'



export default function OneCard (props) {

    const [open, setOpen] = useState(false);

    const {index, question, setContador, contador} = props
    const [typeAnswer, setTypeAnswer] = useState(undefined)
    const [estado, setEstado] = useState(true)

    if (typeAnswer && estado) {
        setContador([...contador, {typeAnswer}]);
        setEstado(false)
    }


    console.log(contador)

    function wasClicked () {
        console.log({index})
        setOpen(true)
    }

   
    return (
        <>
            {
                !open || typeAnswer
                
                
                    ? 
                    !typeAnswer ?
                        <button> Pergunta {index} <img src={Vector} onClick={wasClicked} /> </button> 
                        : 
                            (typeAnswer === 'correct') ? <button id="correct-text"> Pergunta {index}  <img src={correct} onClick={wasClicked}/></button>
                           : (typeAnswer === 'almost') ? <button id="almost-text"> Pergunta {index}  <img src={almost} onClick={wasClicked}/></button> 
                           : <button id="wrong-text"> Pergunta {index}  <img src={wrong} onClick={wasClicked}/></button>
                
                
                : <CardContent question={question.question} answer={question.answer} setTypeAnswer={setTypeAnswer} setContador={setContador} contador={contador}/>

            }
        </>
    )
}