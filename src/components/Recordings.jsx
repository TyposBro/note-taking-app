import useRecordingsList from "../hooks/useRecordingsList";
import "./recordings.css";
import { MdDelete } from "react-icons/md";
import { Howl } from "howler";
import WaveSurfer from "wavesurfer.js";
import { useLayoutEffect, useRef } from "react";

export default function RecordingsList({ audio, timestamps }) {
  const { recordings, deleteAudio } = useRecordingsList(audio);
  const waveformRef = useRef();
  const trackRef = useRef();

  const howler = new Howl({
    src: audio,
    format: ["mp3", "webm"],
    sprite: timestamps,
  });

  useLayoutEffect(() => {
    console.log(waveformRef.current);
    if (waveformRef.current) {
      console.log(waveformRef);

      const wavesurfer = WaveSurfer.create({
        barWidth: 3,
        cursorWidth: 1,
        container: waveformRef.current,
        backend: "WebAudio",
        height: 80,
        progressColor: "#2D5BFF",
        responsive: true,
        waveColor: "#EFEFEF",
        cursorColor: "transparent",
      });
      console.log(recordings);
      console.log(audio);
      wavesurfer.load("https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3");
      wavesurfer.on("ready", function () {
        console.log("ready");
        wavesurfer.play();
      });
    }

    return () => {};
  }, []);

  return (
    <div className="recordings-container">
      {recordings.length > 0 && (
        <div className="recordings-list">
          {Object.keys(timestamps).map((item) => (
            <div onClick={() => howler.play(item)} key={item}>
              {item}
            </div>
          ))}
          {recordings.map((record, i) => (
            <div className="record" key={record.key}>
              <div ref={waveformRef}></div>
              <audio ref={trackRef} src={record.audio} />
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
