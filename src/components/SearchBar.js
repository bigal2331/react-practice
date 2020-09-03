import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = (props) => {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  //two useEffects are used to get around the dependencies array
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    return () => {
      clearInterval(timeoutId);
    };
  }, [term]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          srsearch: debouncedTerm,
          origin: "*",
        },
      });
      setResults(data.query.search);
    };

    getData();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <input
          className="field"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default SearchBar;
