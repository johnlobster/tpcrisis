import React from 'react';
import TpLink from "../TpLink/TpLink";
import styles from "./TpNavDesktop.module.scss";
import { tpNavList} from "./links";



const TpNavDesktop: React.FunctionComponent = () => {
  return (
    <div>
      {tpNavList.map((item, index) => {
        return (
          <TpLink
            to={item[0]}
            key={`key_${index}`}
          >
            {item[1]}
          </TpLink>
        );
      })}
    </div>
  );
}

export default TpNavDesktop;