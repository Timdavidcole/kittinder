import React from "react";
import CatFavouriteCard from "./CatFavouriteCard";
import agent from "../../agent";

class CatFavouritesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
      error: true
    };
    this.getFavouritesBreedInfo = this.getFavouritesBreedInfo.bind(this);
  }

  getFavouritesBreedInfo(favourites) {
    favourites.forEach(cat => {
      agent.Images.getOne(cat.image_id).then(data =>
        this.setState(prevState => ({
          favourites: [...prevState.favourites, data]
        }))
      ).catch(() =>
      this.setState({
        error: true
      })
    );;
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
    } else return null;
  }
}

export default CatFavouritesContainer;