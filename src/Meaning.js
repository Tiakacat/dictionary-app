import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="Header-subname text-dark">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <div key={index}>
            <li>{definition.definition}</li>
            <em className="text-muted">{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}
