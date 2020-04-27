import React from 'react';
import TpLink from "../TpLink/TpLink";
import styles from "./TpNavDesktop.module.scss";
import { tpNavList} from "./links";

const TpNavDesktop: React.FunctionComponent = () => {
  return (
    <div className={styles.desktopBox}>
      <h3 className={styles.titleBox} >Menu</h3>
      <div className={styles.menuBox}>
        {tpNavList.map((navItem, navIndex) => {
          return (
            <TpLink
              to={navItem[0]}
              key={"key_" + navIndex}
            >
              {navItem[1]}
            </TpLink>
          );
        })}
      </div>
      
    </div>
  );
}

export default TpNavDesktop;