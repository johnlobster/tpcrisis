import React, { useState } from 'react';
import styles from "./TpArticle.module.scss";

import * as global from "../../globals/globalTypes";

interface  TpArticleProps {
  articleObj: global.Article
}

// ToDo TpArticle ought to set up it's own html, not page that calls it, would stop an extra render

// ToDo Image

const TpArticle: React.FunctionComponent<TpArticleProps> = (props) => {

  const [articleOpen, setArticleState] = useState(false);

  const openArticle = ():void  => {
    setArticleState(true);
  }

  // ToDo - put the tag at the top <div>

  const closeArticle = (): void => {
    setArticleState(false);
  }

  return (
    <div>
      
      <div className= {
        articleOpen ? (
          styles.topBox + " row"
        ):( 
            styles.topBox + " " + styles.topBoxClosed + " row"
        )}
      >
        <div className="col-12">
          <h2>{props.articleObj.title}</h2>

          <div className= { articleOpen ? (
            styles.contentBox + " " + styles.contentBoxOpen
            ): (
              styles.contentBox
            )}
            >
              {props.children}
          </div>

          <div className={styles.midBox + " col-12"}>
            <div className="btn btn-primary" onClick={openArticle}>Open</div>
            <div className="btn btn-primary" onClick={closeArticle}>Closed</div>
            <br />
            <br />
          </div> 
        </div>
        
      </div>
    </div>
  );
};

export default TpArticle;