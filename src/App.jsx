import RecorderControls from "./components/Controls";
import RecordingsList from "./components/Recordings";
import useRecorder from "./hooks/useRecorder";
import "./App.css";
import { Checkbox, Input, Keywords, Label, Option } from "./App.styled";

export default function App() {
  const { recorderState, ...handlers } = useRecorder();
  const { audio } = recorderState;
  const foo = (e) => {
    console.log(e.target.value);
    console.log(recorderState);
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
          <RecordingsList audio={audio} />
        </div>
      </section>
    </div>
  );
}
