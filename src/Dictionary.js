import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  function search(event) {
    event.preventDefault();
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <imput
          type="search"
          autoFocus={true}
          placeholder="What is your word?"
          // onChange={findWord}
          className="form-control shadow w=100"
        ></imput>
      </form>
    </div>
  );
}
