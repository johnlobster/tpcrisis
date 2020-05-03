import React from 'react';

import TpLink from "../../components/TpLink/TpLink"
import TpArticle from "../../components/TpArticle/TpArticle";
import factsArticles from "./FactsArticles";

import styles from "./Facts.module.scss";

// ToDo - add this into useEffect as anonymous function
// ToDo - move into TpArticle
const tfn: () => void = ()=> {
  factsArticles.forEach( (article) => {
    const x: HTMLElement | null = document.getElementById(article.tag);
    if (x) {
      x.innerHTML = article.body;
    }
  });
}

// ToDo create a list of articles to navigate to. If gets long, should itself be able to expand. Possibly an article itself
//      some confusion about how tag is used. Should be used for start of article, not to insert HTML. use insert_{tag}
const Facts: React.FunctionComponent = () => {

  React.useEffect(tfn,[]);

  return (
    <div className={styles.page + " container-sm"}>
      <div className="row">
        <div className="col-12">
          <div className={styles.pageTitle}>
            Everything you ever wanted to know about toilet paper but were too embarrassed to ask
          </div>
          <p>
            You didn't ask for it, but here it is, the life and times of toilet paper
          </p>
        </div>
        
      </div>

      <div className="row">
        <div className=" col-12">
          <h4>List of articles</h4>
          <ul>
            {factsArticles.map((article) => {
              return (
                <li key={article.index}>
                  <TpLink scroll to={"#" + article.tag}>
                    {article.link}
                  </TpLink>
                </li>
              )}
            )}
          </ul>
        </div>
        <br />
      </div>

      {factsArticles.map( (article)=> {
        return (
          <TpArticle key={article.index} theArticle={article}>
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
