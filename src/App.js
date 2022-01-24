import React, { useState } from "react";
import "./App.css";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import clementine from "./images/trans.png";

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="wrapper">
      <div className="quiz">
        {start ? <Quiz /> : <Start props={setStart} />}
      </div>
      <img className="img-trans" src={clementine} />

      <div className="footer">
        <p> ○ Developed by <strong>CharithaGG</strong> </p>
        <p> ○ Previous fan art - <a><strong>here</strong></a>  </p>
      </div>
    </div>
  );
}

export default App;