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
  /* Using bootstrap medium size to switch between desktop and mobile. 
     This might not be that great an idea, should perhaps be using large size to switch, however several components
     use bootstrap classes d-md-none and so on
     Would be much more consistent to pass in "currentScreen" as a property to the components that need it, and then
     use that to switch between the different sizes

  */
 
  windowResizer = () => {
    let newWidth: number = window.innerWidth;

    if (this.state.currentScreen === global.ScreenType.Mobile) {
      if (newWidth >= global.windowTablet) {
        console.log("Window size change - now desktop");
        this.setState(
          { currentScreen: global.ScreenType.Desktop }
        );
      }
    }
    else {
      if (newWidth < global.windowTablet) {
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
    
    console.log("App component mounted");

    // using a timeout might be overkill. Perhaps also fade in react app
    // ToDo alter timeout or remove it. Possible fade in of app
    setTimeout(() => {
      const spinner = document.getElementById("loadingSpinner");
      const evilVirus = document.getElementById("loadingVirus");
      if (spinner) {
        spinner.style.display = "none";
      }
      if (evilVirus) {
        evilVirus.style.display = "none";
      }
      console.log("hide loading images");
    }, 1000);
    
    // remove hidden attribute on react root
    // const reactRoot: HTMLElement | null = document.getElementById("root");
    // if(reactRoot) {
    //   setTimeout(() => {
    //     reactRoot.removeAttribute("hidden");
    //   }, 500)
    // }

    // set up window size event to change this.currentScreen if necessary
    window.addEventListener("resize", this.windowResizer );
    
    // call window resizer. Default was mobile (mobile first), but may not be. 
    // have to do this because there hasn't been a resize event yet
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
