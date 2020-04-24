import React from 'react';
import ReactDOM from 'react-dom';

import * as globalTypes  from "../../globals/globalTypes";


// list of articles. body can contain string literal or be read from another file
// prebuild script would convert markdown files into strings in a file that could be written into factsArticles
// note that images would have to be linked to. Might have to do /public/articleImages otherwise could be hard to
// refer to images

// Note - body string is converted to html, not through jsx. So use class= instead of className=
const factsArticles: globalTypes.Article[] = [
  {
    index: 0,
    title: "History of toilet paper",
    tag: "t0",
    link: "The history of toilet paper, if you really have to know",
    body : `
    <div>
      <p>
        The question is not so much the history of toilet paper, but what people used before toilet paper
      </p>
      <p>
        If you really need to know all of this in horrible detail, click below
      </p>
      <a href="http://www.toiletpaperhistory.net" class="artLink">
          Toilet Paper history at http://www.toiletpaperhistory.net
      </a>
      </p>
    </div>
    `
  },
  {
    index: 1,
    title: "Strength, Softness and the Environment",
    tag: "t1",
    link: "About strength, softness and environment impact",
    body: `
    <div>
      <p>
        To make toilet paper soft and strong, it has to have a high proportion of wood pulp straight from a tree.
        So to be environmentally sound, you have to give up softness and maybe end up with toilet paper that falls apart,
        rather than doing the job it was designed to do
      </p>
    </div>
    `
  },
  {
    index: 2,
    title: "Other uses for Toilet Paper",
    tag: "t2",
    link: "Things you can do with toilet paper, other than wiping your ...",
    body: `
    <div>
      <p>
        Halloween costume
      </p>
      <p>
        TP a house
      </p>
      <p>
        Football match
      </p>
    </div>
    `
  }
];

export default factsArticles;


