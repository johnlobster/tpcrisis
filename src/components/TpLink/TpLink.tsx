import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./TpLink.module.scss";


interface  TpLinkProps {
  to: string
}
const TpLink: React.FunctionComponent<TpLinkProps> = (props) => {
  return (
    <div className={styles.linkStyle}>
      <Link to={props.to}>{props.children}</Link>
    </div>
  );
};

export default TpLink;