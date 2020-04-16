import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [vlaue, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };
  return { vlaue, onChange };
};

const App = () => {
  const maxLength = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLength);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" onChange={name.onChange} value={name.vlaue} />
      {/* <input placeholder="Name" {...name} /> */}
    </div>
  );
};

export default App;
