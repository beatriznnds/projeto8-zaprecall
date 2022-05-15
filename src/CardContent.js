import setinha from './img/setinha.png'
import {useState} from 'react'
import Footer from './Footer'

export default function CardContent (props) {
    const [open, setOpen] = useState(false)
    const [contador, setContador] = useState(0);

    function wasClicked () {
        setOpen(true);
    }  

    const {question, answer, setTypeAnswer} = props

    function ChangesProprieties (type) {
        setOpen(false);
        setTypeAnswer(type);
        setContador(contador + 1);
    }
    console.log(contador)

    return (
        <>
        {
            !open
            ?
            <div className="question">
                <div>
                    {question}
                </div>
                <div>
                    <img src={setinha} onClick={wasClicked} />
                </div>  
            </div>
            :
            <div className="answers">  
                {answer}         
                <div className="answers-button">
                    <button type="button" id="wrong" onClick={()=> ChangesProprieties('wrong')}>Não lembrei</button>
                    <button type="button" id="almost" onClick={()=> ChangesProprieties('almost')}>Quase não lembrei</button>
                    <button type="button" id="correct" onClick={()=> ChangesProprieties('correct')}>Zap!</button>                 
                </div>
            </div>
        }       
        </>
    )
}
