import correct from './img/correct.png'
import wrong from './img/wrong.png'
import almost from './img/almost.png'
import party from './img/party.png'
import sad from './img/sad.png'

export default function Footer (props) {
    const {contador} = props

    const numberofquestions = 4
    console.log(contador.filter(( { typeAnswer }) => typeAnswer === 'wrong'))

    return (
        
        <div className="bottom">
            <div>
                <>
                {
                    
                    contador.length === 4 ?
                        contador.filter(( { typeAnswer }) => typeAnswer === 'wrong').length !== 0  ? <div className="result"> <span><img src={sad} /> Putz...</span> <p>Ainda faltam alguns...</p> <p>Mas não desanime!</p> </div>
                        : <div className="result"> <span><img src={party} /> Parabéns!</span> <p> Você não esqueceu de </p> <p>nenhum flashcard!</p>  </div>                     
                    : ""
                       
                }
                </> 
            </div>
            <div>
                {contador.length}/{numberofquestions} CONCLUÍDO
            </div>
            <div>           
            {
                contador.map(({ typeAnswer }) => {
                    if (typeAnswer === 'correct') {
                    return <img src={correct} />
                    } else if (typeAnswer === 'wrong') {
                    return <img src={wrong} />
                    } else {
                    return <img src={almost} />
                    }
                })
            }                
            </div>


        </div>
        
    )

}

