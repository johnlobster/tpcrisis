import React from 'react';
import Calc from "./Calc";
import Jokes from "./Jokes";

const Home: React.FunctionComponent<{}> = (props) => {
  return( 
    <div>
      <h1>I am the home page </h1>
      <Calc />
      <Jokes />
    </div>
  );
};

export default Home;