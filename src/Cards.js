import OneCard from './OneCard';
import Header from './Header';
import Footer from './Footer'
import {useState} from 'react'

function shuffleArray(flashcards) {
    let i = flashcards.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = flashcards[i];
      flashcards[i] = flashcards[j];
      flashcards[j] = temp;
    }
    return flashcards;
}


export default function Cards (props) {
    const [contador, setContador] = useState([])
    const {flashcards, setTypeAnswer, setOpen} = props
    const shuffledCards = shuffleArray(flashcards)
    const slicedCards = shuffledCards.slice(0, 4)
    return (        
        <div className="questions">
            <Header />
            {slicedCards.map((question, index) => <OneCard index={index + 1} question={question} setContador={setContador} contador={contador}/>)}
            <Footer setTypeAnswer={setTypeAnswer} contador={contador}/> 
        </div>   
    )  
}