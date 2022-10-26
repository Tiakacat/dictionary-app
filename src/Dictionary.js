import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [definition, setDefinition] = useState({});
  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function typeKeyword(event) {
    setKeyword(event.target.value);
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
