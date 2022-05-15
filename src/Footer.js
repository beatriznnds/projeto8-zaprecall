import {useState} from 'react'
import correct from './img/correct.png'
import wrong from './img/wrong.png'
import almost from './img/almost.png'
import party from './img/party.png'
import sad from './img/sad.png'

export default function Footer (props) {
    const {setTypeAnswer, setOpen, setContador} = props

    const numberofquestions = 4


    return (
        <div className="bottom">
            <div>
                {setContador}/{numberofquestions} CONCLUÍDO
            </div>
            <div>
                {/* { 
                    !setOpen
                        ? (setTypeAnswer === 'correct') ? <img src={correct} />
                        : (setTypeAnswer === 'wrong') ?  <img src={wrong} />
                        : (setTypeAnswer === 'almost') ? <img src={almost} /> 
                }
                { contador === 4  
                    ? (typeAnswer[i] === 'correct') ? `img src={party} Parabéns! Você não esqueceu de nenhum flashcard!`
                    : `img src={sad} Putz... Ainda faltam alguns... Mas não desanime!`
                } */}
            </div>            
        </div>
    )

}

