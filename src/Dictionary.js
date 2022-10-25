import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  function search(event) {
    event.preventDefault();
  }
  return (
    <div className="Dictionary">
      <form className="mt-4" onSubmit={search}>
        <header class="Header-name mt-3">Discover the World of Words</header>
        <div className="row">
          <div className="col-6">
            <input
              className="mt-2 form-control shadow w=100"
              type="search"
              autoFocus={true}
              placeholder="Type your word"
              // onChange={findWord}
            />
          </div>
          <div className="col-3">
            <button
              className="mt-2 btn btn-outline-danger shadow ms-2"
              type="button"
              value="search"
            >
              🔍
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
