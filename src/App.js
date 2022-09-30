import logo from "./logo.png";
import Dictionary from './Dictionary';
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <a
            className="App-link"
            href="https://github.com/Linserga/dictionary-project"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
