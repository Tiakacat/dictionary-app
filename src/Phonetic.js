import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  console.log(props);
  return (
    <div className="row">
      {props.phonetic && (
        <div className="col-sm-6 container-fluid">
          <ReactAudioPlayer src={props.phonetic.audio} controls />
          <div>{props.phonetic.text}</div>
        </div>
      )}
    </div>
  );
}
