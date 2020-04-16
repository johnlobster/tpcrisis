import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import * as ReactDOM from "react-dom";

// import Tp crisis react components
import TpHeader from "./components/TpHeader/TpHeader";
import TpNav from "./components/TpNav/TpNav"

// pages
import Home from "./pages/Home/Home";
import TpFooter from "./components/TpFooter/TpFooter";
import About from "./pages/About/About";
import Tp404 from "./pages/Tp404/Tp404"
import Covid19 from "./pages/Covid19/Covid19";
import Facts from "./pages/Facts/Facts";
import Insanity from "./pages/Insanity/Insanity";
import Alternatives from "./pages/Alternatives/Alternatives";
import Contribute from "./pages/Contribute/Contribute";

import "./App.scss";

// globals

import * as global from  "./globals/globalTypes";

interface Props { }

interface State {
  currentScreen:global.ScreenType ;
};

class App extends React.Component<Props, State>{
  // Mobile first
  state:State = {
      currentScreen : global.ScreenType.Mobile 
  };

  componentDidMount() { 
    // When everything is ready, get rid of the spinner
    // access spinner directly because it is not in react app hierarchy
    const fred = document.getElementById("loadingSpinner");
    console.log("App components is mounting");
    // console.log(fred);
    if (fred) {
      setTimeout(() => { 
        fred.style.display = "none";
        console.log("spinner display written to");
      }, 2000);
      
    }
    
  }

  render () { 
    return(
      <Router>
      
        <TpHeader />
        <TpNav />
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Home' component={Home} />
          <Route path="/About" component={About} />  
          <Route path='/Alternatives' component={Alternatives} />
          <Route path='/Covid19' component={Covid19} />
          <Route path='/Facts' component={Facts} />
          <Route path='/Insanity' component={Insanity} />
          <Route path='/Contribute' component={Contribute} />

          <Route 
            path='*' 
            component = {Tp404} 
          />
        </Switch>
        
        <TpFooter />
        
      </Router>

    );
  }
}
export default App;

/* <Route
  path='*'
  render={() => <Tp404 hyperlinkTarget="Here we are" />}
/> */