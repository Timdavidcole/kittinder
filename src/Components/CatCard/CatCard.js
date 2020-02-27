import React from "react";
import agent from "../../agent";
import FavouriteButton from "./FavouriteButton";

class CatCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
      resolved: false,
      loading: false,
      error: true
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    agent.Images.get({ breed_id: this.props.cat.id })
      .then(data =>
        this.setState({
          image: data[0],
          loading: false,
          resolved: true,
          error: false
        })
      )
      .catch(error => {
        this.setState({
          error: true
        });
      });
  }

  render() {
    const { cat } = this.props;
    if (this.state.error) {
      return (
        <div id="catCard">
          <h2>{cat.name}</h2>
          <div
            id="errorMessage"
            style={{ padding: "5px ", fontSize: "0.8rem" }}
          >
            This cat doesn't like having it's picture shown right now, please
            try again later.
          </div>
          <div style={{ width: "100%" }}>
            <span>{cat.description}</span>
          </div>
        </div>
      );
    } else {
      return (
        <div id={`catCard${this.props.key}`}>
          <h2>{cat.name}</h2>
          <img
            id="cat-image"
            src={this.state.image.url}
            alt={"cat"}
            style={{ maxWidth: "100%", maxHeight: "100vh" }}
          ></img>
          <div style={{ width: "100%" }}>
            <span>{cat.description}</span>
          </div>
          <FavouriteButton
            userId={this.props.userId}
            imageId={this.state.image.id}
          />
        </div>
      );
    }
  }
}

export default CatCard;
