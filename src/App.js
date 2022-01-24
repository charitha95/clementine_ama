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
      <img className="img-trans" src={clementine} alt="clementside" />

      <div className="footer">
        <p>
          {" "}
          ○ Developed by <strong>CharithaGG</strong>{" "}
        </p>
        <p>
          {" "}
          ○ Previous fan art - <strong>
            <a className="prefan" target="_blank" href="https://twitter.com/charithaGG/status/1484043131926749190">here</a>
            
          </strong>{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
