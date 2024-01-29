import React from 'react';
import './App.css';
import quotes from './Data/data';

function Quote(props) {
  return (
    <>
      <div>
        Texte : {props.text}
      </div>
      <div>
        Auteur : {props.author}
      </div>
    </>
  );
}

function App() {


  return (
    <div className="App">
      <h1>
        Mes citations !
      </h1>
      {quotes.map((quote) => (
        <Quote key={quote.id} text={quote.text} author={quote.author} />
      ))}
    </div>
  );
}

export default App;
