import React from "react";

const Search = () =>
  <div>

  <h2>Search</h2>
    <form>
      <div className="form-group">
        <label htmlFor="topic">Topic</label>
        <input type="text" className="form-control" id="topic" aria-describedby="emailHelp" />
      </div>
      <div className="form-group">
        <label htmlFor="start-year">Start Year</label>
        <input type="text" className="form-control" id="start-year" />
      </div>
      <div className="form-group">
        <label htmlFor="end-year">End Year</label>
        <input type="text" className="form-control" id="end-year" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

  </div>

export default Search;