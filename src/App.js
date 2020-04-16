import React, { useState } from "react";

const App = () => {
  // useState()는 초기값(여기서는 1) 과 이 값을 변형할 수 있는 두번째 인자(함수) 를 배열의 형태로 리턴한다.
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>incrementItem</button>
      <button onClick={decrementItem}>decrementItem</button>
    </div>
  );
};

class AppUgly extends React.Component {
  state = {
    item: 1,
  };

  incrementItem = () => {
    this.setState({
      item: this.state.item + 1,
    });
  };

  decrementItem = () => {
    this.setState({
      item: this.state.item - 1,
    });
  };

  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello! {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.incrementItem}>incrementItem</button>
        <button onClick={this.decrementItem}>decrementItem</button>
      </div>
    );
  }
}

export default App;
