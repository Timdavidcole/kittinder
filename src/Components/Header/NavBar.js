import React from "react";
import "./header.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {

  }

  render() {
    return (
      <div className={'navBar'}>
        <button id={"home"} >
          HOME
        </button>
        <button id={"favourites"} >
          FAVOURITES
        </button>
      </div>
    );
  }
}

export default NavBar;
