import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer mt-3">
      <a
        href="https://github.com/Tiakacat/dictionary-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open-source code
      </a>
      &nbsp; by&nbsp;
      <a
        href="https://www.instagram.com/tiakacat/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>Kateryna Gulenok</strong>
      </a>
    </div>
  );
}
