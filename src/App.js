import React from "react";
import Header from "./Components/Header/Header"
import Index from "./Components/Main/Index"


class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Index />
      </div>
    );
  }
}

export default App;
