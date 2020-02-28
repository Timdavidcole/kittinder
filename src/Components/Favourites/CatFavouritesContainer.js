import React from "react";
import CatFavouriteCard from "./CatFavouriteCard";
import agent from "../../agent";

class CatFavouritesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
      error: false
    };
    this.getFavouritesBreedInfo = this.getFavouritesBreedInfo.bind(this);
  }

  getFavouritesBreedInfo(favourites) {
    favourites.forEach(cat => {
      agent.Images.getOne(cat.image_id)
        .then(data =>
          this.setState(prevState => ({
            favourites: [...prevState.favourites, data],
            error: false
          }))
        )
        .catch(() =>
          this.setState({
            error: true
          })
        );
    });
  }

  componentDidMount() {
    agent.Favourites.get(this.props.userId)
      .then(data => this.getFavouritesBreedInfo(data))
      .catch(() =>
        this.setState({
          error: true
        })
      );
  }

  render() {
    if (this.state.error) {
      return (
        <div id={"errorCard"} style={{ padding: "5px ", fontSize: "0.8rem" }}>
          Hmmm, we can't find your favourites. Please try again later.
        </div>
      );
    }
    if (this.state.favourites[0]) {
      return (
        <div className="catCardContainer" style={{ padding: "10px" }}>
          {this.state.favourites.map((cat, index) => {
            return (
              <CatFavouriteCard
                userId={this.props.userId}
                cat={cat.breeds[0]}
                key={index}
                id={index}
              />
            );
          })}
        </div>
      );
    } else return <div></div>;
  }
}

export default CatFavouritesContainer;
