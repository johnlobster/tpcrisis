import React, { useState } from 'react';
import styles from "./TpArticle.module.scss";

import * as global from "../../globals/globalTypes";

interface  TpArticleProps {
  theArticle: global.Article
}

// ToDo TpArticle ought to set up it's own html, not page that calls it, would stop an extra render

// ToDo Image

const TpArticle: React.FunctionComponent<TpArticleProps> = (props) => {

  const [articleOpen, setArticleState] = useState(false);

  const openArticle = ():void  => {
    setArticleState(true);
  }

  // ToDo - put the tag at the top <div>
  // To do move the function that inserts the body as html into tpArticle

  const closeArticle = (): void => {
    setArticleState(false);
  }

  
  return (
    <div className={
      articleOpen ? (
        styles.articleBox + " " + styles.articleBoxOpen + " container-sm"
      ) : (
        styles.articleBox + " container-sm"
      )}>
      
      <div className= {
        articleOpen ? (
          styles.topBox + " row"
        ):( 
            styles.topBox + " " + styles.topBoxClosed + " row"
        )}
      >
        <div className="col-8 col-md-9">
          <h2>{props.theArticle.title}</h2>
        </div>
        <div className={styles.articleButtonBox + " col-4 col-md-3"}>
            {! articleOpen && (
              <button className="btn btn-primary" onClick={openArticle}>Show article</button>
            ) }
        </div>
      </div>

      <div className={articleOpen ? (
        styles.contentBox + " " + styles.contentBoxOpen + " row"
      ) : (
          styles.contentBox + " row"
        )}
      >
        <div className="col-12">
          {props.children}
        </div>    
      </div>

      <div className={ articleOpen ? (
        styles.endBox + " " + styles.endBoxOpen + " row justify-content-end"
      ) : (
        styles.endBox + " row  justify-content-end"
        )}
      >
        <div className={styles.articleCloseButtonBox + " col-4 col-md-3"}>
          <button className="btn btn-primary" onClick={closeArticle}>Close article</button>
        </div>
      </div> 
        
    </div>
  );
};

export default TpArticle;