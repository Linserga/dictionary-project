import SpeakerIcon from "./speaker_icon.png";
import "./PhoneticAudio.css";

function PhoneticAudio(props) {
  function playSound() {
    new Audio(props.audio).play();
  }
  return (
    <div>
      <img src={SpeakerIcon} className="img-fluid phonetic-sound" alt="Speaker Icon" onClick={playSound} />
    </div>
  );
}

export default PhoneticAudio;
