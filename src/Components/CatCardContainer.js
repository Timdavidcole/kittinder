import React from "react";
import agent from "../agent";

class CatCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: [] };
  }

  componentDidMount() {
    agent.Images.get({ breed_id: this.props.breed.id }).then(data =>
      this.setState({ image: data[0].url })
    );
  }

  render() {
    const breed = this.props.breed;
    return (
      <div className="catCardContainer" style={{ padding: "10px"}}>
        <span>{breed.name}</span>
        <img
          src={this.state.image}
          alt={""}
          style={{ maxWidth: "100%", maxHeight: "100vh" }}
        ></img>
        <span>{breed.description}</span>
      </div>
    );
  }
}

export default CatCardContainer;
