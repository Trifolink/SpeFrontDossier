import React from 'react';
import './App.css';
import quotes from './Data/data';

function Quote(props) {
  return (
    <>
      <div class="textecita">
        Texte : {props.text}
      </div>
      <div  class="authorcita">
        Auteur : {props.author}
      </div>
      <br/>
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
        <Quote {...quote} />
      ))}
    </div>
  );
}

export default App;
