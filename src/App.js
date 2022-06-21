import logo from './logo.svg';
import './App.css';

function App() {

  let dateCourante = new Date();
  let tempsJavascript = dateCourante.getTime();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Temps JavaScript: {tempsJavascript} milliseconde
        </p>
        <p>
          Temps PHP: {tempsJavascript/1000} secondes
        </p>
        <p>
          Date pour un humain: {dateCourante.getDate()}/{dateCourante.getMonth()}/{dateCourante.getFullYear()}
        </p>
      </header>
      <footer>Un site de Molengeek</footer>
    </div>
  );
}

export default App;
