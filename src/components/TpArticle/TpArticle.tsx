import React, { useState } from 'react';
import styles from "./TpArticle.module.scss";


const temp: string = `
Hello, I am a string
<h3>Header a</h3>
<h3>Header a</h3>
Voluptate nisi aliquip id sint voluptate. Reprehenderit esse est et sit aute. Esse pariatur veniam enim nulla ut fugiat elit minim veniam nostrud est culpa eiusmod proident. Qui ad enim aliquip dolor.
`;
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
      <div className={ hoverMe ? (
          styles.topBoxHover + " row"
        ):(
          styles.topBox + " row"
        )}>
        <div className={styles.midBox + " col-12"}>
          <div>
            {(open) ? (
              <div>
                <h2>Open</h2>
              </div>
            ) : (
                <h2>Closed</h2>
              )}
            
            <div>
              {temp}
            </div>

            <div>
              {props.children}
            </div>
            
          </div>
              
        </div>
        <div className="btn btn-primary" onClick={openArticle}>Open</div>
        <div className="btn btn-primary" onClick={closeArticle}>Closed</div>
      </div> 
    </div>
  );
};

export default TpArticle;