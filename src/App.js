import React from "react";
import "./App.css";
import agent from "./agent";
import CatCardContainer from "./Components/CatCardContainer";
import shuffle from "./shuffle"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cats: [] };
  }

  componentDidMount() {
    agent.Breeds.all().then(data => this.setState({ cats: data }));
  }
  render() {
    return (
      <div>
        <h1 style={{ padding: "10px" }}>kitTinder</h1>
        {shuffle(this.state.cats).map((breed, index) => {
          return <CatCardContainer key={index} breed={breed} />;
        })}
      </div>
    );
  }
}

export default App;
