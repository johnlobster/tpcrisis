import React from 'react';

import styles from "./Jokes.module.scss";

import * as globalTypes from "../../globals/globalTypes";

import {allJokes} from "../../markdownish/shortJokes";

interface Props { }

interface State {
  pointer:number;
  badJokes: globalTypes.JokeList;
};

class Jokes extends React.Component<Props, State> {
  state: State = {
    pointer: 0,
    badJokes: allJokes
  };

  render() {
    return (
      <div className={styles.jokeBox + " container-sm"}>
        <div className="row justify-content-center mt-4">
          <div className="col-10 col-md-8">
            <div className={styles.title}>
              Bad toilet paper jokes ahead, press the flush to get a new joke
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            Flush Me
          </div>
          <div className="col-9">
            Joke
          </div>
        </div>

      </div>
    );
  }
};

export default Jokes;