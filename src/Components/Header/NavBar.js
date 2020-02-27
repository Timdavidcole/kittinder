import React from "react";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {

  }

  render() {
    return (
      <div>
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
