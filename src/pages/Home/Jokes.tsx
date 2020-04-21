import React from 'react';


import styles from "./Jokes.module.scss";

import * as globalTypes from "../../globals/globalTypes";

// ToDo convert <cr> in shortJokes to <br>
import {allJokes} from "../../markdownish/shortJokes";
import handle from "../../images/tHandle.png";
import roll from "../../images/FlatTP1.jpg";



interface Props { }

// flush state variable used to control animations
// reset to NoFlush after timeout
// string based enum helps with debug
// ToDo remove string enum
enum FlushState  { Flush = "FLUSH", NoFlush = "NOFLUSH"};
// enum FlushState { Flush, NoFlush };


interface JokesState {
  flush: FlushState;
};

const flushTime: number = 1900; // milliseconds
// The flush time is slightly more than animation time (2s). State changes at that point causing new joke to be fed down

class Jokes extends React.Component<Props, Partial<JokesState>> {

  private currentJoke: string = "Flush the toilet for a joke, if you dare";
  private badJokes: globalTypes.JokeList = allJokes;

  state: JokesState = {
    flush: FlushState.NoFlush
  };


  // return a random joke
  getJoke: () => string = () =>  {
    let jokeSize: number = this.badJokes.length;
    return this.badJokes[Math.floor(Math.random()* jokeSize)];
  }

  flushHandler: () => void = () => {
    // enable animation setting up next joke
    console.log("Flush pressed");
    console.log(this.state.flush);

    // only allow a flush if animations not already underway 
    if ( this.state.flush === FlushState.NoFlush) {
      // change flush state and get a new joke
      this.setState({
        flush: FlushState.Flush
      });

      // wait until animations done before accepting next flush
      setTimeout(() => {
        this.currentJoke = this.getJoke();

        this.setState({
          flush: FlushState.NoFlush
        });
        console.log("Flush released");

      }, flushTime);
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

        <div className={styles.upperBox + " row"}>
          <div className={styles.flusherBox + " col-12 col-md-4"}>
            <div>
            <div className={styles.imageBox}>
                <img src={handle} alt="Toilet handle, flush me" onClick={this.flushHandler}
                  className={(this.state.flush === FlushState.NoFlush) ? (
                    styles.tHandle
                  ) : (
                      styles.tHandle + " " + styles.tHandleFlush
                    )}
                />
            </div>
            <div className={styles.flushMe} onClick={this.flushHandler} >
              Flush Me
            </div>
            </div>
          </div>

          <div className={styles.paperBox + " col-12 col-md-8"}>
            <div>
              <div className="tpFlexCenterContents">
                <img src={roll} alt="Toilet paper dispenser" className={styles.tRoll} />
              </div>
              <div className={styles.tpJokeBox}>
                <div className={(this.state.flush === FlushState.NoFlush) ? (
                  styles.tpJoke + " " + styles.tpUnroll
                ) : (
                  styles.tpJoke + " " + styles.tpFlush
                  )}
                >
                  {this.currentJoke}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row"></div>

      </div>
    );
  }
};

export default Jokes;

// ToDo "Flush me" should change pointer and look different on hover
