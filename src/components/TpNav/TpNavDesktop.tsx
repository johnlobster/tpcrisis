import React from 'react';
import TpLink from "../TpLink/TpLink";
import styles from "./TpNavDesktop.module.scss";
import { tpNavList} from "./links";

// ToDo - convert the two components into DRY single component
// ToDo - current page different colour
// ToDo = convert zebra style to :nth-child(2n)

/* Zebra styling
  Can't create a rule a:nth-child(2n) rule, because module scss isn't really going to get passed down to the <a> element
  In the end, realized that I needed a <div> around the TpLink to get the stripe to extend across the whole of the menu, so
  it was easy to add :nth-child(2n) to that <div>
*/

const TpNavDesktop: React.FunctionComponent = () => {
  return (
    <div className={styles.desktopBox}>
      <h3 className={styles.titleBox} >Menu</h3>
      <div className={styles.menuBox}>
        {tpNavList.map((navItem, index) => {
          return (
            <div className={styles.stripey}>
              <TpLink
                to={navItem[0]}
                key={`key_${index}`}
              >
                {navItem[1]}
              </TpLink>
            </div>
            
          );
        })}
      </div>
      
    </div>
  );
}

export default TpNavDesktop;