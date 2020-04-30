import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./TpLink.module.scss";

// import iLinkImage from "../../images/ilink2.png";
//import xLinkImage from "../../images/ilink2.png";

// To do ARIA props, particularly on icon
interface  TpLinkProps {
  to: string,
  className?: string,
  external?: boolean,
  scroll?: boolean
}
const TpLink: React.FunctionComponent<TpLinkProps> = (props) => {
  let passClassName: string | undefined = "";
  if( props.hasOwnProperty("className")) {
    passClassName = props.className;
  }

  let externalLink: boolean | undefined = false;
  if( props.hasOwnProperty("external")) {
    externalLink = props.external;
  }

  let internalScroll: boolean | undefined = false;
  if (props.hasOwnProperty("scroll")) {
    internalScroll = props.scroll;
    
  }

  const scrollMe = (event: React.MouseEvent): void => {
    const element = document.querySelector(props.to);
    if (element) {
      console.log("Scrolling to " + props.to);
      element.scrollIntoView()
    } else {
      console.log("COuldn't scroll to " + props.to);
    }
  }

  const Scroller: React.FunctionComponent = (sProps) => {
    return (
      <span onClick={scrollMe} className={styles.scrollStyle} role="button" aria-haspopup="true" aria-expanded="false">
        {sProps.children}
      </span>
    );
  }
  

  return (
    <span className={styles.linkStyle}  >
      {internalScroll ? (
        <Scroller>
          {props.children}
        </Scroller>
      ):(
        <Link to={props.to}>
          {props.children} 
          <span className={styles.iconBox}>
              <span className={styles.iconStyle}></span>
          </span>
        </Link>
      )}
      
      {externalLink && " Ex Link "}
    </span>
  );
};

export default TpLink;

