import React, { Component } from "react";

class LifeCycleDemoClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor 호출");
  }

  // componentDidMount (마운트 시)
  componentDidMount() {
    console.log("컴포넌트가 마운트되었습니다.");
  }

  // componentDidUpdate (업데이트 시)
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`count가 업데이트되었습니다: ${this.state.count}`);
    }
  }

  // componentWillUnmount (언마운트 시)
  componentWillUnmount() {
    console.log("컴포넌트가 언마운트됩니다.");
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>LifeCycle Demo (Class)</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>+ 증가</button>
      </div>
    );
  }
}

export default LifeCycleDemoClass;