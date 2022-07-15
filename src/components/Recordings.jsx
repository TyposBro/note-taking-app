import useRecordingsList from "../hooks/useRecordingsList";
import "./recordings.css";
import { MdDelete } from "react-icons/md";
import { Howl } from "howler";

export default function RecordingsList({ audio, timestamps }) {
  const { recordings, deleteAudio } = useRecordingsList(audio);

  const howler = new Howl({
    src: audio,
    format: ["mp3", "webm"],
    sprite: timestamps,
  });
  console.log(howler);
  console.log(timestamps);

  return (
    <div className="recordings-container">
      {recordings.length > 0 && (
        <div className="recordings-list">
          {Object.keys(timestamps).map((item) => (
            <div onClick={() => howler.play(item)} key={item}>
              {item}
            </div>
          ))}
          {recordings.map((record) => (
            <div className="record" key={record.key}>
              {/* <audio controls src={record.audio} /> */}
              <div className="delete-button-container">
                <MdDelete className="delete-button" title="Delete this audio" onClick={() => deleteAudio(record.key)}></MdDelete>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
