import RecorderControls from "./components/Controls";
import RecordingsList from "./components/Recordings";
import useRecorder from "./hooks/useRecorder";
import "./App.css";

export default function App() {
  const { recorderState, ...handlers } = useRecorder();
  const { audio } = recorderState;

  return (
    <div className="app">
      <section className="keywords">
        <div className="option">
          <input className="input" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <div className="checkbox"></div>
          <label className="label" for="vehicle1">
            I have a bike
          </label>
        </div>
        <div className="option">
          <input className="input" type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <div className="checkbox"></div>

          <label className="label" for="vehicle2">
            I have a car
          </label>
        </div>
        <div className="option">
          <input className="input" type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <div className="checkbox"></div>

          <label className="label" for="vehicle3">
            I have a boat
          </label>
        </div>
        <div className="option">
          <input className="input" type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <div className="checkbox"></div>

          <label className="label" for="vehicle3">
            I have a boat
          </label>
        </div>{" "}
        <div className="option">
          <input className="input" type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <div className="checkbox"></div>

          <label className="label" for="vehicle3">
            I have a boat
          </label>
        </div>{" "}
        <div className="option">
          <input className="input" type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <div className="checkbox"></div>

          <label className="label" for="vehicle3">
            I have a boat
          </label>
        </div>{" "}
        <div className="option">
          <input className="input" type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <div className="checkbox"></div>

          <label className="label" for="vehicle3">
            I have a boat
          </label>
        </div>{" "}
        <div className="option">
          <input className="input" type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <div className="checkbox"></div>

          <label className="label" for="vehicle3">
            I have a boat
          </label>
        </div>{" "}
        <div className="option">
          <input className="input" type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <div className="checkbox"></div>

          <label className="label" for="vehicle3">
            I have a boat
          </label>
        </div>{" "}
        <div className="option">
          <input className="input" type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <div className="checkbox"></div>

          <label className="label" for="vehicle3">
            I have a boat
          </label>
        </div>{" "}
        <div className="option">
          <input className="input" type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <div className="checkbox"></div>

          <label className="label" for="vehicle3">
            I have a boat
          </label>
        </div>{" "}
        <div className="option">
          <input className="input" type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <div className="checkbox"></div>

          <label className="label" for="vehicle3">
            I have a boat
          </label>
        </div>{" "}
        <div className="option">
          <input className="input" type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <div className="checkbox"></div>

          <label className="label" for="vehicle3">
            I have a boat
          </label>
        </div>{" "}
        <div className="option">
          <input className="input" type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <div className="checkbox"></div>

          <label className="label" for="vehicle3">
            I have a boat
          </label>
        </div>{" "}
        <div className="option">
          <input className="input" type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <div className="checkbox"></div>

          <label className="label" for="vehicle3">
            I have a boat
          </label>
        </div>
      </section>
      <section className="voice-recorder">
        <div className="recorder-container">
          <RecorderControls recorderState={recorderState} handlers={handlers} />
          <RecordingsList audio={audio} />
        </div>
      </section>
    </div>
  );
}
