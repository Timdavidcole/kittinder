import React from "react";
import agent from "../agent";

class CatCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: [] };
  }

  componentDidMount() {
    agent.Images.get({ breed_id: this.props.breed.id }).then(data =>
      this.setState({image: data[0].url})
    );
  }

  render() {
    const breed = this.props.breed;
    console.log(breed.id);

    return <div className={"catCardContainer"}>{breed.name}<img src={this.state.image}></img></div>;
  }
}

export default CatCardContainer;
