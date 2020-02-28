import React from "react";
import agent from "../../agent";

class CatFavouriteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
      resolved: false,
      error: true
    };
  }

  componentDidMount() {
    agent.Images.get({ breed_id: this.props.cat.id })
      .then(data =>
        this.setState({
          image: data[0],
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
        <center>
          <div
            style={{
              backgroudColor: "rgb(255, 182, 205)",
              margin: "20px",
              padding: "5px",
              borderRadius: "20px",
              boxShadow: "0px 0px 15px 0px rgba(158,158,158,1)",
              maxWidth: "400px"
            }}
            id="catFavouriteCard"
          >
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
        </center>
      );
    } else {
      return (
        <center>
          <div
            style={{
              backgroudColor: "rgb(255, 182, 205)",
              margin: "20px",
              padding: "5px",
              borderRadius: "20px",
              boxShadow: "0px 0px 15px 0px rgba(158,158,158,1)",
              maxWidth: "400px"
            }}
            id={`catFavouriteCard`}
          >
            <h2>{cat.name}</h2>
            <img
              id="cat-image"
              src={this.state.image.url}
              alt={"cat"}
              style={{ maxWidth: "400px", maxHeight: "400px" }}
            ></img>
            <div style={{ width: "100%" }}>
              <span>{cat.description}</span>
            </div>
          </div>
        </center>
      );
    }
  }
}

export default CatFavouriteCard;
