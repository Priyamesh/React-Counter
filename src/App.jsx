import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const incrCounter = () => {
    if (counter < 100) setCounter(counter + 1);
    else alert("You have reached the Maximum limit");
  };

  const incrCounter2 = () => {
    if (counter < 99) {
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    } else alert("You have reached the Maximum limit");
  };

  const decrCounter = () => {
    if (counter > 0) setCounter(counter - 1);
    else alert("You have recahed the Minimum limit");
  };

  return (
    <>
      <h1>React Counter Project</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={incrCounter}> Increase Counter </button>
      <button onClick={incrCounter2}> Increase Counter by 2 </button>
      <button onClick={decrCounter}> Decrease Counter </button>
    </>
  );
}

export default App;
