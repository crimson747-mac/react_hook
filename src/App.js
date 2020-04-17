import React, { useState, useEffect } from "react";

// useEffect: componentWillUnmount + componentDidMount + componentDidUpdate
// useEffect 는 첫 번째 인자로 함수를 받는다.

// 두 번째 인자는 deps(dependency) 이며 만약 deps가 있다면
// useEffect는 deps 리스트에 있는 값일 때만 componentDidUpate가 발생한다.

// useEffect는 함수를 리턴하는데 그게 componentWillUnmount 이다.
const App = () => {
  const sayHello = () => console.log("hello");

  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]);
  //useEffect(sayHello, []); => compoenentDidMount 가 로드시 한 번만 실행된다.

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

export default App;
