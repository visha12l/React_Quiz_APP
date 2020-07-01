import React from "react";
import ReactDOM from "react-dom";
import Loader from "react-loader";
import "./css/style2.css";
import "./css/common.css";

import Quiz from "./javascript/components/Quiz/index";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Javascript Quiz</h1>
      <Quiz />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
