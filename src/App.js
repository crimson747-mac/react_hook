import React, { useState, useEffect, useRef } from "react";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = ""; // google chrome only
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button>
    </div>
  );
};

export default App;
