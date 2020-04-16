import React, { useState } from "react";

const useInput = (initialValue) => {
  const [vlaue, setValue] = useState(initialValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { vlaue, onChange };
};

const App = () => {
  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" onChange={name.onChange} value={name.vlaue} />
      {/* <input placeholder="Name" {...name} /> */}
    </div>
  );
};

export default App;
