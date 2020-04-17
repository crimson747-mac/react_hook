import React, { useState, useEffect, useRef } from "react";

//useRef() - document.getElementById() 와 같이 DOM 요소를 참조할 수 있다.
//JSX 는 ref 라는 것을 가지고 이를 이용할 수 있다.
//useRef() 로 가져온 값은 default로 current 안에 DOM 요소를 가진다.

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    //useEffect에서 함수를 return 하면 그 함수는 componentWillUnMount시에 호출이 된다.
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
};

export default App;
