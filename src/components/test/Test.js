import React, { Component } from "react";

class Test extends Component {
  state = {
    test: "test",
  };

  componentDidMount() {
    console.log("componentDidMount...");
  }

  UNSAFE_componentWillMount() {
    console.log("componentWillMount...");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate...");
  }

  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate...");
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log("componentWillReceiveProps...");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      test: "someting",
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate...");
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
