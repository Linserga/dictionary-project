import Definition from "./Definition";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";

function Meanings(props) {
  if (props.definition.word) {
    return (
      <div>
        <section>
        <h1 className="text-capitalize">{props.definition.word}</h1>
        <h3 className="text-capitalize">{props.definition.phonetic}</h3>
        <Phonetics phonetics={props.definition.phonetics} />
        </section>
        {props.definition.meanings.map((meaning, index) => {
          return (
            <section key={index}>
              <h4>{meaning.partOfSpeech}</h4>
              <Definition meaning={meaning} />
              <Synonyms synonyms={meaning.synonyms} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Meanings;
