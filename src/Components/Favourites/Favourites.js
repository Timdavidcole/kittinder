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
    return (
      <div>
        <CatFavouritesContainer userId={this.props.userId} cats={this.props.cats}/>
      </div>
    );
  }
}

export default Favourites;
