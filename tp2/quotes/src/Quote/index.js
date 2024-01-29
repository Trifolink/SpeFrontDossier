// Chemin d'importation du composant Quote.js
import React from 'react';

function Quote(props) {
  return (
    <>
      <div className='textecita'>
        Texte : {props.text}
      </div>
      <div className='authorcita'>
        Auteur : {props.author}
      </div>
    </>
  );
}

export default Quote;
