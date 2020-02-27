import React from "react";
import agent from "../../agent";
import CatFavouritesContainer from "./CatFavouritesContainer";

class Favourites extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: true };
  }

  componentDidMount() {
    agent.Breeds.all()
      .then(data => {
        this.props.updateCats(data);
        this.setState({ error: false });
      })
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
          Hmmm, we can't find your favourites.  Please try again later.
        </div>
      );
    } else {
      return (
        <div>
          <CatFavouritesContainer
            userId={this.props.userId}
          />
        </div>
      );
    }
  }
}

export default Favourites;
