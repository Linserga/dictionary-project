import Definition from "./Definition";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";

function Meanings(props) {
  if (props.definition.word) {
    return (
      <div>
        <h1 className="text-capitalize">{props.definition.word}</h1>
        <h3 className="text-capitalize">{props.definition.phonetic}</h3>
        <Phonetics phonetics={props.definition.phonetics} />
        {props.definition.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <h4>{meaning.partOfSpeech}</h4>
              <Definition meaning={meaning} />
              <Synonyms synonyms={meaning.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Meanings;
