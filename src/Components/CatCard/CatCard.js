import React from "react";
import agent from "../../agent";

class CatCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      resolved: false,
      loading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    agent.Images.get({ breed_id: this.props.cat.id })
      .then(data =>
        this.setState({
          image: data[0].url,
          loading: false,
          resolved: true,
          error: false
        })
      )
      .catch(() =>
        this.setState({
          error: true
        })
      );
  }

  render() {
    const { cat } = this.props;
    if (this.state.error) {
      return (
        <div id="catCard">
          <h2>{cat.name}</h2>
          <div style={{ padding: "5px ", fontSize: "0.8rem"}}>Cat image server is taking a nap, please try again later.</div>
          <div style={{ width: "100%" }}>
            <span>{cat.description}</span>
          </div>
        </div>
      );
    } else {
      return (
        <div id="catCard">
          <h2>{cat.name}</h2>
          <img
            id="cat-image"
            src={this.state.image}
            alt={"cat-image"}
            style={{ maxWidth: "100%", maxHeight: "100vh" }}
          ></img>
          <div style={{ width: "100%" }}>
            <span>{cat.description}</span>
          </div>
        </div>
      );
    }
  }
}

export default CatCard;
