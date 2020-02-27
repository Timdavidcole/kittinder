import React from "react";
import agent from "../../agent";
import CatCardContainer from "../CatCard/CatCardContainer";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: true, cats: [] };
  }

  componentDidMount() {
    agent.Breeds.all()
      .then(data => this.setState({ error: false, cats: data }))
      .catch(() =>
        this.setState({
          error: true
        })
      );
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: "5px ", fontSize: "0.8rem" }}>
          The cats are a bit shy right now, please try again later.
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
