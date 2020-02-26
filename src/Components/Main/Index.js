import React from "react";
import agent from "../../agent";
import CatCardContainer from "../CatCard/CatCardContainer";
import shuffle from "../../Models/shuffle"

class Index extends React.Component {
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
        {shuffle(this.state.cats).map((breed, index) => {
          return <CatCardContainer key={index} breed={breed} />;
        })}
      </div>
    );
  }
}

export default Index;
