import React, { Component } from "react";

class Test extends Component {
  state = {
    test: "test",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          title: data.title,
          userId: data.userId,
          id: data.id,
        })
      );
  }

  // UNSAFE_componentWillMount() {
  //   console.log("componentWillMount...");
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate...");
  // }

  // UNSAFE_componentWillUpdate() {
  //   console.log("componentWillUpdate...");
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("componentWillReceiveProps...");
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     test: "someting",
  //   };
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate...");
  // }

  render() {
    const { title, userId, id } = this.state;
    return (
      <div>
        <h1>Title: {title}</h1>
        <p>User Id: {userId}</p>
        <p>Id: {id}</p>
      </div>
    );
  }
}

export default Test;
