import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./TpLink.module.scss";


interface  TpLinkProps {
  to: string,
  className?: string
}
const TpLink: React.FunctionComponent<TpLinkProps> = (props) => {
  let passClassName: string | undefined = "";
  if( props.hasOwnProperty("className")) {
    passClassName = props.className;
  }
  return (
    <span className={styles.linkStyle}  >
      <Link to={props.to}
        className={passClassName}>
        {props.children}
      </Link>
    </span>
  );
};

export default TpLink;