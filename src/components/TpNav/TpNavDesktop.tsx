import React from 'react';
import TpLink from "../TpLink/TpLink";
import styles from "./TpNavDesktop.module.scss";
import { tpNavList} from "./links";

const TpNavDesktop: React.FunctionComponent = () => {
  return (
    <div className={styles.topBox}>
      <h3>Menu</h3>
      {tpNavList.map((navItem, navIndex) => {
        return (
          <div>
            <TpLink
              to={navItem[0]}
              key={`key_${navIndex}`}
              >
              {navItem[1]}
            </TpLink>
          </div>
        );
      })}
    </div>
  );
}

export default TpNavDesktop;