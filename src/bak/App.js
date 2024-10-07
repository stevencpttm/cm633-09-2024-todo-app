import React from "react";
import SharedContext from "./SharedContext";

import ComponentA from "./ComponentA";

class App extends React.Component {
  state = {
    sharedData: "Shared Data",
  };

  updateData = (newData) => {
    this.setState({
      sharedData: newData,
    });
  };

  render() {
    return (
      <SharedContext.Provider
        value={{
          data: this.state.sharedData,
          updateData: this.updateData,
        }}
      >
        <ComponentA />
      </SharedContext.Provider>
    );
  }
}

export default App;
