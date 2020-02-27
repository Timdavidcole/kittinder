import React from "react";
import Header from "./Components/Header/Header";
import Index from "./Components/Main/Index";
import Favourites from "./Components/Favourites/Favourites";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      cats: []
    };
    this.updateCats = this.updateCats.bind(this);
  }

  componentDidMount() {
    this.setState({ userId: Math.floor(Math.random() * 10000) });
  }

  updateCats(cats) {
    this.setState({ cats: cats });
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/favourites">
              <Favourites
                updateCats={this.updateCats}
                cats={this.state.cats}
                userId={this.state.userId}
              />
            </Route>
            <Route path="/">
              <Index
                updateCats={this.updateCats}
                cats={this.state.cats}
                userId={this.state.userId}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
