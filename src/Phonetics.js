import PhoneticAudio from "./PhoneticAudio";

function Phonetics(props) {
  function playSound(url) {
    new Audio(url).play();
  }

  return (
    <div>
      {props.phonetics.map((phonetic, index) => {
        return (
          <div key={index}>
            <PhoneticAudio audio={phonetic.audio} />            
            <p>{phonetic.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Phonetics;
