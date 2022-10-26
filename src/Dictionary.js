import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function typeKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    search();
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="mt-4">
        <header class="Header-name mt-3">Discover the World of Words</header>
        <div className="row">
          <div className="col-6">
            <input
              className="mt-2 form-control shadow w=100"
              type="search"
              autoFocus={true}
              placeholder="Type your word"
              onChange={typeKeyword}
            />
          </div>
          <div className="col-3">
            <button
              className="mt-2 btn btn-outline-danger shadow ms-2"
              type="button"
              onClick={handleClick}
            >
              🔍
            </button>
          </div>
        </div>
      </form>
      <Results results={results} />
    </div>
  );
}
