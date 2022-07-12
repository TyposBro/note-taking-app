import { formatMinutes, formatSeconds } from "../utils/time";
import "./controls.css";
import { FaMicrophone } from "react-icons/fa";

export default function RecorderControls({ recorderState, handlers }) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;

  return (
    <div className="controls-container">
      <div className="recorder-display">
        <div className="recording-time">
          {initRecording && <div className="recording-indicator"></div>}
          <span>{formatMinutes(recordingMinutes)}</span>
          <span>:</span>
          <span>{formatSeconds(recordingSeconds)}</span>
        </div>
        {/* {initRecording && (
          <div className="cancel-button-container">
            <button className="cancel-button" title="Cancel recording" onClick={cancelRecording}>
              Cancel
            </button>
          </div>
        )} */}
      </div>
      <div className="start-button-container">
        {initRecording ? (
          <FaMicrophone className="button save" title="Save recording" disabled={recordingSeconds === 0} onClick={saveRecording} />
        ) : (
          <FaMicrophone className="button start" title="Start recording" onClick={startRecording} />
        )}
      </div>
    </div>
  );
}
