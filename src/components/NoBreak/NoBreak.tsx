import React from 'react';
// import styles from "./NoBreak.module.scss";

const NoBreak: React.FunctionComponent<{}> = (props) => {
  return (
    <span style={{whiteSpace: 'nowrap'}}>{props.children}</span>
  );

}

export default NoBreak;

/* <span className={styles.noBreak}>{props.children}</span> */
