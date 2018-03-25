import React from "react";
import Saved from "./Saved";
import Search from "./Search";

const Main = () =>
  <div>
  <h1>New York Times Article Search</h1><hr/>
    <Search />
    <div>
      <h2>Results</h2>
      <div>
        Results Div
      </div>
    </div>
    <Saved />
    
  </div>

export default Main;