import React, { Component } from "react";
import SharedContext from "./SharedContext";

class ComponentB extends Component {
  render() {
    return (
      <SharedContext.Consumer>
        {(sharedData) => {
          return (
            <div>
              <h1>Component B, ({sharedData.data})</h1>
              <button
                onClick={() => {
                  sharedData.updateData("Hello!!!");
                }}
              >
                Update
              </button>
            </div>
          );
        }}
      </SharedContext.Consumer>
    );
  }
}

export default ComponentB;
