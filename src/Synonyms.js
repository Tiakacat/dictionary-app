import React from "react";

export default function Synonyms(props) {
  return (
    <ul className="Synonyms">
      {props.response.length !== 0 &&
        props.response.map(function(synonym) {
          return synonym.synonyms.map(function(item, index) {
            return <li key={index}>{item}</li>;
          });
        })}
    </ul>
  );
}
