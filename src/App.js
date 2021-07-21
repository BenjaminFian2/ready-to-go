import "./App.css";
import { useState } from "react";
import rocket from "./assets/img/rocket.svg";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  const [go, setGo] = useState(false);

  const handleClickBtn1 = () => {
    setSwitch1(true);
    if (switch2 && switch3) {
      setGo(true);
    }
  };

  const handleClickBtn2 = () => {
    setSwitch1(false);
    setGo(false);
  };

  const handleClickBtn3 = () => {
    setSwitch2(true);
    if (switch1 && switch3) {
      setGo(true);
    }
  };

  const handleClickBtn4 = () => {
    setSwitch2(false);
    setGo(false);
  };

  const handleClickBtn5 = () => {
    setSwitch3(true);
    if (switch1 && switch2) {
      setGo(true);
    }
  };

  const handleClickBtn6 = () => {
    setSwitch3(false);
    setGo(false);
  };

  const handleClickBtnR = () => {
    setSwitch1(false);
    setSwitch2(false);
    setSwitch3(false);
    setGo(false);
  };

  return (
    <>
      <header>
        <img src={rocket} alt="logo" />
        Ready To Go
      </header>
      <hr />
      <section>
        <article>
          <div className="switchs">
            <div>
              <button
                className={switch1 ? "regular purple" : "regular white"}
                onClick={handleClickBtn1}
              >
                ON
              </button>
              <button
                className={switch1 ? "regular white" : "regular purple"}
                onClick={handleClickBtn2}
              >
                OFF
              </button>
            </div>
            <div>
              <button
                className={switch2 ? "regular purple" : "regular white"}
                onClick={handleClickBtn3}
              >
                ON
              </button>
              <button
                className={switch2 ? "regular white" : "regular purple"}
                onClick={handleClickBtn4}
              >
                OFF
              </button>
            </div>
            <div>
              <button
                className={switch3 ? "regular purple" : "regular white"}
                onClick={handleClickBtn5}
              >
                ON
              </button>
              <button
                className={switch3 ? "regular white" : "regular purple"}
                onClick={handleClickBtn6}
              >
                OFF
              </button>
            </div>
          </div>
        </article>
        <article>
          <div className="goReset">
            <button className={go ? "big green" : "big red"}>
              {go ? "Go !" : "No way !"}
            </button>
            <button className="regular blue" onClick={handleClickBtnR}>
              Reset
            </button>
          </div>
        </article>
      </section>
      <footer>
        <p>
          Made with <a href="https://fr.reactjs.org/">React</a> at{" "}
          <a href="https://www.lereacteur.io/">Le Reacteur</a> by{" "}
          <a href="https://github.com/BenjaminFian2">Benjamin</a>
        </p>
      </footer>
    </>
  );
}

export default App;
