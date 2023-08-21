import img from "./assets/meme.jpg";
import { useEffect, useState } from "react";

function App() {
  const [blink, setBlink] = useState("true");
  //timer
  const [count, setCount] = useState(15);
  const [timer, setTimer] = useState("true");

  let boxes = [];
  for (let i = 0; i < 100; i++) {
    boxes.push(<div key={i} className="multiple-boxes"></div>);
  }

  //rabbits

  let rabbits = [];
  for (let i = 0; i < 20; i++) {
    rabbits.push(
      <div key={i} className="multiple-rabbits">
        🐇
      </div>
    );
  }

  //ghost

  useEffect(() => {
    let interval = setInterval(() => {
      setBlink((blink) => !blink);
    }, 2000);
    return () => clearTimeout(interval);
  }, []);

  //timer

  useEffect(() => {
    if (timer && count > 0) {
      const countdownInterval = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      return () => {
        clearInterval(countdownInterval);
      };
    } else if (count === 0) {
      setTimer(false);
    }
  }, [count, timer]);

  return (
    <div id="main-component">
      <div id="explode">
        {timer ? (
          <p>
            This page will self destruct in {""}
            {count} seconds.
          </p>
        ) : (
          <div id="boom">
            <p className="blink">
              💣💣💣 Don't worry, no browsers were harmed in the making of this
              explosion! 💣💣💣
            </p>
          </div>
        )}
      </div>
      <div id="one" className="section">
        <div></div>
        <h1>1</h1>
        <hr />
      </div>
      <div id="blueBox" className="section">
        <div className="box"></div>
        <h1>2</h1>
        <hr />
      </div>
      <div id="meme" className="section">
        <div>
          <img src={img} alt="" />
        </div>
        <h1>3</h1>
        <hr />
      </div>
      <div id="multipleBoxes" className="section">
        <div className="flex">{boxes}</div>
        <h1>4</h1>
        <hr />
      </div>
      <div id="ghost" className="section">
        <div className={`section ${blink ? "hidden" : ""}`}>👻</div>
        <h1>5</h1>
        <hr />
      </div>
      <div id="rabbit" className="section">
        <p>I'm a magician. If I hover over a rabbit, it will dissapear!</p>
        <div className="flex">{rabbits}</div>
        <h1>6</h1>
        <hr />
      </div>
    </div>
  );
}

export default App;
