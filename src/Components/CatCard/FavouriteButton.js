import React from "react";
import agent from "../../agent";

class FavouriteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    agent.Favourites.post(this.props.imageId, this.props.userId)
      .then(data => null)
      .catch(error => {
        this.setState({
          error: true
        });
      });
  }

  render() {
    return (
      <button
        id={`favouriteButton${this.props.imageId}`}
        onClick={this.onClick}
      >
        Favourite
      </button>
    );
  }
}

export default FavouriteButton;
