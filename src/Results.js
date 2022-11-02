import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import Photos from "./Photos";
import Synonyms from "./Synonyms";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="row">
        <div className="col-sm-6 word-definition">
          <section>
            <h2 className="Header-name text-danger">{props.results.word}</h2>
            {props.results.phonetics.map(function(phonetic, index) {
              if (phonetic.audio.length > 0) {
                return <Phonetic phonetic={phonetic} key={index} />;
              } else {
                return null;
              }
            })}
          </section>
          {props.results.meanings.map(function(meaning, index) {
            return (
              <section className="partOfSpeech" key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          })}
        </div>
        <div className="col-sm-6 word-definition">
          <Photos photos={props.photos} />
          <section className="partOfSpeech">
            <h3 className="Header-subname text-dark"> Synonyms</h3>
            <Synonyms response={props.results.meanings} />
          </section>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
