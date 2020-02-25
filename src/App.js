import React from "react";
import "./App.css";
import agent from "./agent";
import CatCardContainer from "./Components/CatCardContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cats: [] };
  }

  componentDidMount() {
    agent.Images.all({ size: "med", limit: 10, page: 0 }).then(data =>
      this.setState({ cats: data })
    );
  }
  render() {
    console.log(this.state.cats);
    return (
      <div>
        <h1>Hello Cats</h1>
        {this.state.cats.map((cat, index) => {
          return <CatCardContainer key={index} cat={cat} />;
        })}
      </div>
    );
  }
}

export default App;
