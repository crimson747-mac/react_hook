import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updatetitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };
  useEffect(updatetitle, [title]);
  return setTitle;
};

const App = () => {
  const titleHandler = useTitle("Loading...");
  setTimeout(() => titleHandler("Home"), 3000);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;
