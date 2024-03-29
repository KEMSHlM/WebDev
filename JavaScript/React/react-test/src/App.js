import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState(false);

  const onClick = () => {
    setState((s) => !s);
  };

  const callbackRef = (arg) => {
    console.log(arg); // <span>text1</span> と null が交互に表示される
  };

  return (
    <div>
      <button type="button" onClick={onClick}>
        click
      </button>
      {state && <span ref={callbackRef}>text1</span>}
    </div>
  );
};

export default App;
