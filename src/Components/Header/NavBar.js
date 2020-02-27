import React from "react";
import "./header.css";
import { withRouter } from "react-router-dom";
import { Route } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ButtonHome = withRouter(({ history }) => (
      <button
        type="button"
        onClick={() => {
          history.push("/");
        }}
      >
        Home
      </button>
    ));

    const ButtonFavourites = withRouter(({ history }) => (
      <button
        type="button"
        onClick={() => {
          history.push("/favourites");
        }}
      >
        Favourites
      </button>
    ));
    return (
      <div className={"navBar"}>
        <ButtonHome />
        <ButtonFavourites />
      </div>
    );
  }
}

export default NavBar;