import React from "react";
import agent from "../../agent";
import CatCardContainer from "../CatCard/CatCardContainer";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, cats: [] };
  }

  componentDidMount() {
    agent.Breeds.all()
      .then(data => this.setState({ cats: data }))
      .catch(() =>
        this.setState({
          error: true
        })
      );
  }

  render() {
    console.log(this.state.cats)
    if (this.state.error) {
      return (
        <div style={{ padding: "5px ", fontSize: "0.8rem" }}>
          Kitten server is taking a nap, please try again later.
        </div>
      );
    } else {
      return (
        <div>
          <CatCardContainer cats={this.state.cats} />;
        </div>
      );
    }
  }
}

export default Index;
