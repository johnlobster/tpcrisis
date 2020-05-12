import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import './index.css';
import * as serviceWorker from './serviceWorker';

// To get a fast first render of the html body before loading react app, added media="print" to all stylesheets
// This code converts media"print" to media="all" so that stylesheets now get built into the CSSDOM and their
// styles get used. Any <link> that is not a stylesheet will not be changed

// get all <link> elements
const collectionOfLinks : HTMLCollectionOf<HTMLElement> = document.getElementsByTagName("link");

for (let link of collectionOfLinks ) {
  const relAttribute: string | null = link.getAttribute("rel");
  const mediaAttribute: string | null = link.getAttribute("media");
  if ( relAttribute) {
    if ( relAttribute === "stylesheet") {
      if ( mediaAttribute) {
        if ( mediaAttribute === "print") {
          link.setAttribute("media", "all");
        } 
      }
    }
  } 
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

