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
    { texte: "Dans le doute pied au plancher", auteur: "Grand tourismo" },
    { texte: "Qelque chose en l'aire fini par tombe par terre FORT", auteur: "Yooouuutoonne" },
    { texte: "Ne met pas tes doigts dans la porte tu risque de te faire mal", auteur: "Un lapin rose" }
  ];

  return (
    <div className="App">
      <h1>Mes citations MaGniFique !</h1>
      {citations.map((citation, index) => (
        <Quote key={index} texte={citation.texte} auteur={citation.auteur} />
      ))}
    </div>
  );
}

export default App;
