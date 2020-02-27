import React from "react";
import "./header.css";
import Logo from "./Logo";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h2>Find your favourite cat breed...</h2>
        <Logo />
      </header>
    );
  }
}
export default Header;
