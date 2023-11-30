import React, { useState } from "react";
import "./App.css"

const App = () => {

  const [result, setresult] = useState("");

  const handleClick = (e) => {

    setresult(result.concat(e.target.name));

  }

  const clear = () => {
    setresult("");
  }

  const backspace = () => {
    setresult(result.slice(0, result.length - 1));
  }

  const equal = () => {
    try {
      setresult(eval(result).toString());
    } catch (error) {
      if (result.length === 0) {
        return;
      }
      else {
        setresult("0")
      }
    }

  }

  return (
    <>
      <div className="container">
        <form>
        <input type="text" value={result} onChange={handleClick} />
        </form>


        <div className="keypad">
          <button onClick={clear} id="clear">clear</button>
          <button onClick={backspace} id="backspace">c</button>
          <button name="/" onClick={handleClick} id="cd">&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" onClick={handleClick} id="cd">&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="-" onClick={handleClick} id="cd">&minus;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" onClick={handleClick} id="cd">+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button onClick={equal} id="equal">=</button>
          {/* all done */}
        </div>

      </div>
    </>
  )
}


export default App;