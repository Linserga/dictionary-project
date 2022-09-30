import { useState, useEffect } from "react";
import axios from "axios";
import Definition from "./Definition";
import "./Dictionary.css";

function Dictionary() {
  const [loaded, setLoaded] = useState(false);
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState({});

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then((response) => {
      setLoaded(true);
      setDefinition(response.data[0]);
      console.log(response.data[0]);
    });
    event.target.reset();
  }

  function handleChange(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  const form = (
    <form onSubmit={search} className="m-3">
      <input
        type="search"
        className="form-control rounded"
        onChange={handleChange}
        autoFocus="on"
        placeholder="Type a word"
      />
    </form>
  );

  if (loaded) {
    return (
      <div>
        <div className="search-form">{form}</div>
        <section>
          <h1 className="text-capitalize">{definition.word}</h1>
          <h3 className="text-capitalize">{definition.phonetic}</h3>
          {definition.meanings.map((meaning, index) => {
            return (
              <div>
                <h4 key={index}>{meaning.partOfSpeech}</h4>
                <Definition meaning={meaning} />                
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return <div className="search-form">{form}</div>;
  }
}

export default Dictionary;
