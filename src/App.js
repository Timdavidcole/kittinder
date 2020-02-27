import React from "react";
import Header from "./Components/Header/Header";
import Index from "./Components/Main/Index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      cats: []
    };
    this.updateCats = this.updateCats.bind(this)
  }

  componentDidMount() {
    this.setState({ userId: Math.floor(Math.random() * 10000) });
  }

  updateCats(cats) {
    this.setState({ cats: cats });
  }

  render() {
    return (
      <div>
        <Header />
        <Index updateCats={this.updateCats} cats={this.state.cats} userId={this.state.userId} />
      </div>
    );
  }
}

export default App;
