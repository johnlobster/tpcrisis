import React, { useState } from 'react';
import styles from "./TpArticle.module.scss";


interface  TpArticleProps {
  sampleText: string
}


const TpArticle: React.FunctionComponent<TpArticleProps> = (props) => {

  const [open, setArticleState] = useState(false);

  const [hoverMe, setHoverMeState] = useState(true);

  const openArticle = ():void  => {
    setArticleState(true);
    setHoverMeState(false);

  }

  const closeArticle = (): void => {
    setArticleState(false);
    setHoverMeState(true);
  }

  return (
    <div>
      
      <p>Sample text (prop) is {props.sampleText}</p>
      <div>
        {props.children}
      </div>
      <div className={ hoverMe ? (
          styles.topBoxHover + " row"
        ):(
          styles.topBox + " row"
        )}>
        <div className={styles.midBox + " col-12"}>
          {(open) ? (
            <div>
              <h2>Open</h2>
              <p>Commodo nisi ex aliquip elit elit exercitation pariatur cupidatat sit ea quis ipsum. Ut exercitation amet consequat Lorem minim laborum dolore incididunt veniam enim aliquip sit. Fugiat ea fugiat irure in nulla.</p>
            </div>
          ) : (
            <h2>Closed</h2>
          )}
        </div>
        <div className="btn btn-primary" onClick={openArticle}>Open</div>
        <div className="btn btn-primary" onClick={closeArticle}>Closed</div>
      </div> 
    </div>
  );
};

export default TpArticle;