import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import Tp crisis react components
import TpHeader from "./components/TpHeader/TpHeader";
import TpFooter from "./components/TpFooter/TpFooter";

import TpNavMobile from "./components/TpNav/TpNavMobile";
import TpNavDesktop from "./components/TpNav/TpNavDesktop";

// instances Switch (react-router)
import TpSwitch from "./components/TpSwitch/TpSwitch";

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

  // named function instead of anonymous, as needs to be called on mount
  windowResizer = () => {
    let newWidth: number = window.innerWidth;

    if (this.state.currentScreen === global.ScreenType.Mobile) {
      if (newWidth >= global.windowDesktop) {
        console.log("Window size change - now desktop");
        this.setState(
          { currentScreen: global.ScreenType.Desktop }
        );
      }
    }
    else {
      if (newWidth < global.windowDesktop) {
        console.log("Window size change - now mobile");
        this.setState(
          { currentScreen: global.ScreenType.Mobile }
        );
      }
    }
  }

  componentDidMount() { 
    // When everything is ready, get rid of the spinner
    // access spinner directly because it is not in react app hierarchy
    const fred = document.getElementById("loadingSpinner");
    console.log("App components is mounting");
    // console.log(fred);
    if (fred) {
      // using a timeout might be overkill. Perhaps also fade in react app
      // ToDo alter timeout or remove it. Possible fade in of app
      setTimeout(() => { 
        fred.style.display = "none";
        console.log("spinner display written to");
      }, 1000);
      
    }
    // set up window size event to change this.currentScreen if necessary
    window.addEventListener("resize", this.windowResizer );
    // call window resizer. Default was mobile (mobile first), but may not be
    this.windowResizer();
  }
  
    // ToDo remove resize event listener ?
  // componentWillUnmount() {
    
  // }

  render () { 
    return(
      <Router>
      
        <TpHeader />
        <div className="container">
          {(this.state.currentScreen === global.ScreenType.Mobile) ? (
            <React.Fragment>
              <TpNavMobile />
              <TpSwitch />
            </React.Fragment>
            
          ) : (
            <React.Fragment>
              <div className="row">
                <div className="col-3">
                  <TpNavDesktop />
                </div>
                <div className="col-9">
                  <TpSwitch />
                </div>
              </div> 
            </React.Fragment>           
          )}
        </div>

        <TpFooter />
        
      </Router>

    );
  }
}
export default App;
