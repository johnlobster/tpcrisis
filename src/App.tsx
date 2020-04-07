import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import * as ReactDOM from "react-dom";

// import Tp crisis react components
import TpHeader from "./components/TpHeader/TpHeader";
import Home from "./pages/Home/Home";

import * as globalTypes from  "./globals/globalTypes";

enum ScreenType {Mobile, Tablet, Desktop}

interface Props { }

interface State {
  currentScreen:globalTypes.ScreenType ;
};

class App extends React.Component<Props, State>{

  state:State = {
    currentScreen: globalTypes.ScreenType.Mobile // Mobile first
  }

  render () {
    return(
      

      <Router>
        <div className="App">
          <TpHeader />
        </div>

        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
  );
  }
}
export default App;
