import React from 'react';
import './App.css';
import Quote from './Quote/index';
import { getQuotes } from './Data/data';

// function Quote(props) {
//   return (
//     <>
//       <div className="textecita">
//         Texte : {props.text}
//       </div>
//       <div  className="authorcita">
//         Auteur : {props.author}
//       </div>
//       <br/>
//     </>
//   );
// }

function AllQuotes({ quotes }) {
  return (
    <div className="App">
      <h1>
        Mes citations !
      </h1>
      {/* Utilisation des citations passées en attribut */}
      {quotes.map((quote) => (
        <Quote key={quote.id} {...quote} />
      ))}
    </div>
  );
}

export default function App() {
  const quotes = getQuotes(); // Appel de la fonction getQuotes pour obtenir les citations

  return (
    <AllQuotes quotes={quotes} /> // Passage des citations comme attribut à AllQuotes
  );
}