import { useState, useEffect } from "react";
import axios from "axios";
import Meanings from "./Meanings";
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

  return (
    <div>
      <div className="search-form">{form}</div>
      <section>
        <Meanings definition={definition} />
      </section>
    </div>
  );
}

export default Dictionary;
