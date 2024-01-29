import logo from './logo.svg';
import './App.css';

function Quote(props) {
  const { text, author } = props;

  return (
    <>
      <div>
        Texte : {text}
      </div>
      <div>
        Auteur : {author}
      </div>
    </>
  );
}

  const citation1 = {
    text: "Première citation",
    author: "Auteur 1"
  };

  const citation2 = {
    text: "Deuxième citation",
    author: "Auteur 2"
  };

function App() {
  return (
    <div>
      <Quote text={citation1.text} author={citation1.author} />
      <Quote text={citation2.text} author={citation2.author} />
    </div>
  );
}

export default App;

