import React from 'react';
import './App.css';

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
  const quotes = [
    { id: 14, text: "Dans le doute pied au plancher", auteur: "Grand tourismo" },
    { id: 56, text: "Qelque chose en l'aire fini par tombe par terre FORT", auteur: "Yooouuutoonne"  },
    { id: 3, text: "Ne met pas tes doigts dans la porte tu risque de te faire mal", auteur: "Un lapin rose" },
    { id: 41, text: "You talkin' to me?", auteur: "Travis Bickle" }
  ];

  return (
    <div className="App">
      <h1>
        Mes citations !
      </h1>
      {quotes.map((quote) => (
        <Quote key={quote.id} text={quote.text} author={quote.auteur} />
      ))}
    </div>
  );
}

export default App;
