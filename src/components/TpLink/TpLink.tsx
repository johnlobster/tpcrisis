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
const TpLink: React.FunctionComponent<TpLinkProps> = ({...props}) => {

  let internalScroll: boolean | undefined = false;
  if (props.hasOwnProperty("scroll")) {
    internalScroll = props.scroll;
    
  }

  // external link will start with http
  let externalLink: boolean =  /^http/.test(props.to) ;

  const scrollMe = (event: React.MouseEvent): void => {
    const element = document.querySelector(props.to);
    if (element) {
      console.log("Scrolling to " + props.to);
      element.scrollIntoView()
    } else {
      console.log("Couldn't scroll to " + props.to);
    }
  }

  const ScrollMe: React.FunctionComponent = (sProps) => {
    return (
      <span onClick={scrollMe} className={styles.scrollStyle} role="button" aria-haspopup="true" aria-expanded="false">
        {sProps.children}
      </span>
    );
  }
  
  

  return (
    

    <span className={styles.linkStyle}  >
      {internalScroll ? (
        <ScrollMe>
          {props.children}
        </ScrollMe>
      ) : (
        props.hasOwnProperty("className") ? (
          externalLink ? (
            <a className={props.className} href={props.to}>
              {props.children}
            </a>
          ): (
            <Link to = {props.to} className={props.className}>
              {props.children}
            </Link>
          )
        ) : (
          externalLink ? (
            <a href={props.to}>
              {props.children}
            </a>
          ) : (
            <Link to={props.to} >
              {props.children}
            </Link>
          )
        )

      )}

    </span>
  );
};

export default TpLink;

