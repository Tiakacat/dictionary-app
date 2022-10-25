import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  function search(event) {
    event.preventDefault();
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              autoFocus={true}
              placeholder="What is your word?"
              // onChange={findWord}
              className="form-control shadow w=100"
            />
          </div>
          <div className="col-3">
            <button
              className="btn btn-outline-danger shadow"
              type="submit"
              value="search"
            >
              Let's find out!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
