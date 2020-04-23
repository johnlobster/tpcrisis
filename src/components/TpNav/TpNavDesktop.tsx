import React from 'react';
import TpLink from "../TpLink/TpLink";
// import styles from "./TpNavDesktop.module.scss";
import { tpNavList} from "./links";

//     <div className={styles.topBox}>

const TpNavDesktop: React.FunctionComponent = () => {
  return (
    <div >
      <h3>Menu</h3>
      {tpNavList.map((item, index) => {
        return (
          <React.Fragment>
          <TpLink
            to={item[0]}
            key={`key_${index}`}
          >
            {item[1]}
          </TpLink>
          <br />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default TpNavDesktop;