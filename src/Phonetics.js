import PhoneticAudio from "./PhoneticAudio";
import "./Phonetics.css";

function Phonetics(props) {
  function playSound(url) {
    new Audio(url).play();
  }

  return (
    <div>
      {props.phonetics.map((phonetic, index) => {
        return (
          <div key={index} className="Phonetics">
            <PhoneticAudio audio={phonetic.audio} />            
            <p>{phonetic.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Phonetics;
