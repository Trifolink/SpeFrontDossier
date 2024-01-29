import React from 'react';
import './App.css';

function Quote(props) {
  return (
    <>
      <div>
        Texte : {props.texte}
      </div>
      <div>
        Auteur : {props.auteur}
      </div>
    </>
  );
}

function App() {
  const citations = [
    { texte: "Elementary, my dear Watson", auteur: "Sherlock Holmes" },
    { texte: "May the Force be with you", auteur: "Obi-Wan Kenobi" },
    { texte: "To infinity and beyond!", auteur: "Buzz Lightyear" }
  ];

  return (
    <div className="App">
      <h1>
        Mes citations !
      </h1>
      {citations.map((citation, index) => (
        <Quote key={index} texte={citation.texte} auteur={citation.auteur} />
      ))}
    </div>
  );
}

export default App;
