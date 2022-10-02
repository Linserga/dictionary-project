import { useState, useEffect } from "react";
import axios from "axios";
import Meanings from "./Meanings";
import Photos from './Photos';
import "./Dictionary.css";

function Dictionary() {
  const [loaded, setLoaded] = useState(false);
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState({});
  const [photos, setPhotos] = useState(null);

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then((response) => {
      setLoaded(true);
      setDefinition(response.data[0]);
      
    });

    let pexelsApiKey = "563492ad6f917000010000013f5204eb04014ee291f6ef82522ca9a1";
    let url = `https://api.pexels.com/v1/search?query=${word}`;
    axios.get(url, { headers: {"Authorization" : `Bearer ${pexelsApiKey}`} }).then(response => {
      setPhotos(response.data.photos);
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
    <div className="Dictionary">
      <section className="search-form">{form}</section>
      <div>
        <Meanings definition={definition} />
      </div>
      <Photos photos={photos} />
    </div>
  );
}

export default Dictionary;
