import logo from './img/logo.png'
import React from 'react';


export default function HomePage ({setPage}) {
    
    
    return (
        <div className="homepage">
            <div className="background">
                <img src={logo} />
                <h1>ZapRecall</h1>
                <button type="button" onClick={ () => setPage('firstpage')}>Iniciar Recall!</button>
            </div>
        </div>
    )
}