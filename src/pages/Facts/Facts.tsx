import React from 'react';

import * as globals from "../../globals/globalTypes";

import TpArticle from "../../components/TpArticle/TpArticle";
import factsArticles from "./FactsArticles";

import styles from "./Facts.module.scss";

// ToDo - add this into useEffect as anonymous function
const tfn: () => void = ()=> {
  factsArticles.forEach( (article) => {
    const x: HTMLElement | null = document.getElementById(article.tag);
    if (x) {
      x.innerHTML = article.body;
    }
  })
  
  

}

const Facts: React.FunctionComponent = () => {

  React.useEffect(tfn,[]);

return (
  <div className={styles.page + " container-sm"}>
    <h3>I don't deserve to be here</h3>
    {factsArticles.map( (article, aIndex)=> {
      return (
        <TpArticle key={article.index} articleObj={article}>
          <div id={article.tag}>
          </div>
        </TpArticle>
        );
      })
    } 
  </div>
    );
}

export default Facts;
