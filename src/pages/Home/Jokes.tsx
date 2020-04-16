import React from 'react';

import styles from "./Jokes.module.scss";

import * as globalTypes from "../../globals/globalTypes";

import {allJokes} from "../../markdownish/shortJokes";
import handle from "../../images/tHandle.png";

interface Props { }

// flush state variable used to control animations
// reset to NoFlush after timeout
// string based enum helps with debug
enum FlushState  { Flush = "FLUSH", NoFlush = "NOFLUSH"};
// enum FlushState { Flush, NoFlush };


interface JokesState {
  badJokes: globalTypes.JokeList;
  flush: FlushState;
  currentJoke: string;
};

class Jokes extends React.Component<Props, Partial<JokesState>> {

  state: JokesState = {
    badJokes: allJokes,
    flush: FlushState.NoFlush,
    currentJoke: ""
  };


  getJoke: () => string = () =>  {
    let jokeSize: number = this.state.badJokes.length;
    return this.state.badJokes[Math.floor(Math.random()* jokeSize)];
  }

  flushHandler: () => void = () => {
    // enable animation setting up next joke
    console.log("Flush pressed");
    console.log(this.state.flush);

    // only allow a flush if animations not already underway 
    if ( this.state.flush === FlushState.NoFlush) {
      // change flush state and get a new joke
      this.setState({
        flush: FlushState.Flush,
        currentJoke: this.getJoke()
      });

      // wait until animations done before accepting next flush
      setTimeout(() => {
        this.setState({ flush: FlushState.NoFlush});
        console.log("Flush released");
      }, 2000);
    }
    
  }
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
          <div className="col-12 col-md-4 justify-content-center">
            <div onClick={this.flushHandler}>
              <img src={handle} alt="Toilet handle" 
                className={(this.state.flush === FlushState.NoFlush) ? (
                  styles.tHandle 
                ) : (
                  styles.tHandle + " " + styles.tHandleFlush
                )}   
              />
              <p>Flush Me</p>
            </div>
          </div>

          <div className="col-12 col-md-8 justify-content-center">
            <div className={(this.state.flush === FlushState.NoFlush) ? (
              styles.tpJoke
            ) : (
              styles.tpJoke + " " + styles.tpFlush
              )}
            >
              {this.state.currentJoke}
            </div>
          </div>
        </div>

      </div>
    );
  }
};

export default Jokes;
