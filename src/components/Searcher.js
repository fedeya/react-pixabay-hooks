import React, { useState } from "react";
import Error from "./Error";

function Searcher({ setSearch }) {

  const [term, setTerm] = useState("");
  const [error, setError] = useState(false);

  const searchImage = e => {
    e.preventDefault();

    if(term === ""){
      setError(true);
      return;
    }

    setError(false);
    setSearch(term);
  }

  return (
    <form onSubmit={searchImage}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search a image, example: Football or Coffe"
            onChange={e => setTerm(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Search"
          />
        </div>
      </div>
      { error && <Error message={"Add a Search Term"} /> }
    </form >
  );
}

export default Searcher;