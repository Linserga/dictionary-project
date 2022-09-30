import { useState, useEffect } from "react";
import axios from "axios";
import "./Dictionary.css";

function Dictionary() {
  const [loaded, setLoaded] = useState(false);
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState({});

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then((response) => {
      console.log(response.data);
      setDefinition(response.data);
    });
    event.target.reset();
  }

  function handleChange(event) {
    event.preventDefault();
    setWord(event.target.value);
  }  

  return (
    <div className="search-form">
      <form onSubmit={search} className="m-3">
        <input
          type="search"
          className="form-control rounded"
          onChange={handleChange}
          autoFocus="on"
          placeholder="Type a word"
        />
      </form>
    </div>
  );
}

export default Dictionary;
