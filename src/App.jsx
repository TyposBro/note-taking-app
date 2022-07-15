import RecorderControls from "./components/Controls";
import RecordingsList from "./components/Recordings";
import useRecorder from "./hooks/useRecorder";
import "./App.css";
import { Checkbox, Input, Keywords, Label, Option } from "./App.styled";
import { useState } from "react";

export default function App() {
  const { recorderState, ...handlers } = useRecorder();
  const { audio } = recorderState;
  const [timestamps, setTimestamps] = useState({});

  const foo = ({ target }) => {
    const { recordingMinutes, recordingSeconds } = recorderState;

    const start = (recordingMinutes * 60 + recordingSeconds) * 1000;

    setTimestamps((prev) => ({ ...prev, [target.value]: [start, 60000] }));
  };

  return (
    <div className="app">
      <Keywords>
        <Option>
          <Input disabled={!recorderState.initRecording} onClick={foo} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <Label htmlFor="vehicle1">
            <Checkbox /> I have a bike
          </Label>
        </Option>
        <Option>
          <Input disabled={!recorderState.initRecording} onClick={foo} type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <Label htmlFor="vehicle2">
            <Checkbox />I have a car
          </Label>
        </Option>
        <Option>
          <Input disabled={!recorderState.initRecording} onClick={foo} type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <Label htmlFor="vehicle3">
            <Checkbox />I have a boat
          </Label>
        </Option>
      </Keywords>
      <section className="voice-recorder">
        <div className="recorder-container">
          <RecorderControls recorderState={recorderState} handlers={handlers} />
          {audio && <RecordingsList timestamps={timestamps} audio={audio} />}
        </div>
      </section>
    </div>
  );
}
