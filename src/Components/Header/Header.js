import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
          kit<span style={{ fontSize: "4rem" }}>Tinder</span>
        </h1>
      </header>
    );
  }
}

export default Header;
