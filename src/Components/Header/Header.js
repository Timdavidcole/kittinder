import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: [] };
  }

  render() {
    return (
      <header>kitTinder</header>
    );
  }
}

export default Header;
