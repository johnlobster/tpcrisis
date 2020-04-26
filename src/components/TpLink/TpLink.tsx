import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./TpLink.module.scss";


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

  return (
    <span className={styles.linkStyle}  >
      {internalScroll && " Simple scroll "}
      <Link to={props.to}
        className={passClassName}>
        {props.children} 
      </Link>
      {externalLink && " Ex Link "}
    </span>
  );
};

export default TpLink;