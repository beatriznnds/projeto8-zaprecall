import HomePage from './HomePage';
import React from 'react';
import FirstPage from './FirstPage';
export default function App () {

    const [page, setPage] = React.useState('homepage');

    return (
        <> 
           {
               page === 'homepage' ? <HomePage setPage={setPage}/> : <FirstPage />
           }
        </>
    )
}