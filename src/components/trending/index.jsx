import React from "react";
import Article from "./article";
import Sidebar from "./sidebar";
import "./Trending.css";
function Trending(props) {
  return (
    <div className="grid">
      <Article />
      <Sidebar />
    </div>
  );
}

export default Trending;
