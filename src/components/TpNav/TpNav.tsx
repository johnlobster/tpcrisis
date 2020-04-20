import React from 'react';

import * as global from "../../globals/globalTypes";

import styles from "./TpNav.module.scss";

interface Props {
  cScreen: global.ScreenType
}

// ToDo make ScreenType string enum

const TpNav: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      <h1>I am a Navbar</h1>;
      <h1>Screen size is {(props.cScreen === global.ScreenType.Mobile) ? (
        "Mobile"
      ) : (
        "Desktop"
      )}
        
      </h1>

      <div className={(props.cScreen === global.ScreenType.Mobile) ? (
        styles.navMobile
      ) : (
        styles.navDesktop
        )}>
          <h1>Colour me</h1>
      </div>
    </div>
  );
}

export default TpNav;