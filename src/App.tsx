import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import * as ReactDOM from "react-dom";

// import Tp crisis react components
import TpHeader from "./components/TpHeader/TpHeader";
import TpNav from "./components/TpNav/TpNav"
import Home from "./pages/Home/Home";
import TpFooter from "./components/TpFooter/TpFooter";


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
      <div>

        

        <Router>

          <TpHeader />
          <TpNav />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Home' component={Home} />

          </Switch>

          <TpFooter />

        </Router>


      </div>
      
  );
  }
}
export default App;
