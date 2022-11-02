import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="audio-player">
      {props.phonetic && (
        <div className="col-sm-6 container-fluid">
          <ReactAudioPlayer src={props.phonetic.audio} controls />
          <div className="text-center">{props.phonetic.text}</div>
        </div>
      )}
    </div>
  );
}
