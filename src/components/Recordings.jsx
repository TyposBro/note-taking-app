import useRecordingsList from "../hooks/useRecordingsList";
import "./recordings.css";
import { MdDelete } from "react-icons/md";

export default function RecordingsList({ audio }) {
  const { recordings, deleteAudio } = useRecordingsList(audio);

  return (
    <div className="recordings-container">
      {recordings.length > 0 && (
        <div className="recordings-list">
          {recordings.map((record) => (
            <div className="record" key={record.key}>
              <audio controls src={record.audio} />
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
