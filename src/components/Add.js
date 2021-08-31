import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = e => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://priceless-lamarr-95b8dd.netlify.app/.netlify/functions/api/search=${e.target.value}`
    )
      .then(res => res.json())
      .then(data => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a television show..."
              value={query}
              onChange={onChange}
              autoFocus
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map(tvSeries => (
                <li key={tvSeries.id}>
                  <ResultCard tvSeries={tvSeries} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
