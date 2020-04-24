import React from 'react';
import ReactDOM from 'react-dom';

import * as globalTypes  from "../../globals/globalTypes";

import Test1Component from "../../markdownish/tsx/test1";

let el = document.createElement("DIV"); // el is a simple div to be inserted somewhere

ReactDOM.render(
  <div>
    <h2>I got rendered</h2>
  </div>,
  el);

const factsArticles: globalTypes.Article[] = [
  {
    index: 0,
    title: "Test me out",
    tag: "t1",
    link: "Click on me",
    component: el
  }
];

export default factsArticles;

// title: string,
//   tag: string,
//     image: string | undefined,
//       link: string,
//         body: string
