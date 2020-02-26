import React from "react";
import agent from "../../agent";
import CatCardContainer from "../CatCard/CatCardContainer";

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
        <CatCardContainer cats={this.state.cats} />;
      </div>
    );
  }
}

export default Index;
