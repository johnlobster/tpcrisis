import React from 'react';

import TpArticle from "../../components/TpArticle/TpArticle";
import insanityArticles from "./insanityArticles";

import styles from "./Insanity.module.scss";

// ToDo - add this into useEffect as anonymous function
// ToDo - move into TpArticle
const tfn: () => void = () => {
  insanityArticles.forEach((article) => {
    const x: HTMLElement | null = document.getElementById(article.tag);
    if (x) {
      x.innerHTML = article.body;
    }
  });
}


const Insanity: React.FunctionComponent<{}> = () => {

  React.useEffect(tfn, []);

  return (
    <div className={styles.page + " container-sm"}>
      <div className="row">
        <div className={styles.pageTitle + " col-12"}>
          Crazy things happening with toilet paper, whilst a pandemic ravishes the world
        </div>
      </div>

      <div className="row">
        <div className=" col-12">
          <h4>List of articles</h4>
          <ul>
            {insanityArticles.map((article) => {
              return (
                <li key={article.index}>
                  {article.link}
                </li>
              )
            }
            )}
          </ul>
        </div>
        <br />
      </div>

      {insanityArticles.map((article) => {
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
export default Insanity;
