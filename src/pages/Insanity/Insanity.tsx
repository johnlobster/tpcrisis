import React from 'react';

import TpLink from "../../components/TpLink/TpLink"
import TpArticle from "../../components/TpArticle/TpArticle";
// import insanityArticles from "./insanityArticles";

import styles from "./Insanity.module.scss";

const Insanity: React.FunctionComponent<{}> = () => {

  return (
    <div className={styles.page + " container-sm"}>
      <div className="row">
        <div className={styles.pageTitle + " col-12"}>
          Crazy things happening with toilet paper, whilst a pandemic ravishes the world
        </div>
      </div>

      <div className="row mt-4">
        <div className=" col-12">
          <h4>Articles coming soon</h4>
        </div>
      </div>

      {/* <div className="row">
        <div className=" col-12">
          <h4>List of articles</h4>
          <ul>
            {insanityArticles.map((article) => {
              return (
                <li key={article.index}>
                  <TpLink scroll to={"#" + article.tag}>
                    {article.link}
                  </TpLink>
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
      } */}

    </div>
  );
}
export default Insanity;
