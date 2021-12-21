import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, info) {
    console.log("error:", error);
    console.log("info:", info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p style={{ fontSize: "5rem" }}>ОЙ! Произошла ошибка :(</p>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
