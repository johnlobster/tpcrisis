import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "../../pages/Home/Home";
import Tp404 from "../../pages/Tp404/Tp404"
import Covid19 from "../../pages/Covid19/Covid19";
import Facts from "../../pages/Facts/Facts";
import Insanity from "../../pages/Insanity/Insanity";
import Alternatives from "../../pages/Alternatives/Alternatives";
import Contribute from "../../pages/Contribute/Contribute";
import About from "../../pages/About/About";

const TpSwitch: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/Home' component={Home} />
      <Route path="/About" component={About} />
      <Route path='/Alternatives' component={Alternatives} />
      <Route path='/Covid19' component={Covid19} />
      <Route path='/Facts' component={Facts} />
      <Route path='/Insanity' component={Insanity} />
      <Route path='/Contribute' component={Contribute} />

      {/*  Without path, routes anything*/}
      <Route component={Tp404} />
    </Switch>
  );
}

export default TpSwitch;