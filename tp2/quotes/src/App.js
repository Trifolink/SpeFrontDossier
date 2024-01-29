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
    { id: 14, text: "Elementary, my dear Watson", author: "Sherlock Holmes" },
    { id: 56, text: "I think therefore I am", author: "Rene Descartes" },
    { id: 3, text: "Big Brother is watching you", author: "George Orwell" },
    { id: 41, text: "You talkin' to me?", author: "Travis Bickle" }
  ];

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
