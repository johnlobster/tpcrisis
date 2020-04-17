import React from 'react';

import styles from "./Jokes.module.scss";

import * as globalTypes from "../../globals/globalTypes";

// ToDo convert <cr> in shortJokes to <br>
import {allJokes} from "../../markdownish/shortJokes";
import handle from "../../images/tHandle.png";

const flushTime: number = 1900; // milliseconds
// The flush time is slightly more than animation time (2s). State changes at that point causing new joke to be fed down

interface Props { }

// flush state variable used to control animations
// reset to NoFlush after timeout
// string based enum helps with debug
// ToDo remove string enum
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
    currentJoke: "Flush the toilet for a joke, if you dare"
  };



  getJoke: () => string = () =>  {
    let jokeSize: number = this.state.badJokes.length;
    return this.state.badJokes[Math.floor(Math.random()* jokeSize)];
  }

  private nJoke: string = "Flush the toilet for a joke, if you dare";

  flushHandler: () => void = () => {
    // enable animation setting up next joke
    console.log("Flush pressed");
    console.log(this.state.flush);
    const newJoke: string = this.getJoke();

    // only allow a flush if animations not already underway 
    if ( this.state.flush === FlushState.NoFlush) {
      // change flush state and get a new joke
      this.setState({
        flush: FlushState.Flush
      });

      // wait until animations done before accepting next flush
      setTimeout(() => {
        this.nJoke = this.getJoke();

        this.setState({
          flush: FlushState.NoFlush,
          currentJoke: newJoke
        });
        console.log("Flush released");

      }, flushTime);
    }
    
  }
  render() {
    return (
      <div className=" container-sm">

        <div className="row justify-content-center mt-4">
          <div className="col-10 col-md-8">
            <div className={styles.title}>
              Bad toilet paper jokes ahead, press the flush to get a new joke
            </div>
          </div>
        </div>

        <div className={styles.upperBox + " row "}>
          <div className="col-12 col-md-4 justify-content-center">
            <div onClick={this.flushHandler}>
              <img src={handle} alt="Toilet handle, flush me" 
                className={(this.state.flush === FlushState.NoFlush) ? (
                  styles.tHandle 
                ) : (
                  styles.tHandle + " " + styles.tHandleFlush
                )}   
              />
              <p className={styles.flushMe} onClick={this.flushHandler} >Flush Me</p>
            </div>
          </div>

          <div className={styles.paperBox + " col-12 col-md-8 justify-content-center"}>
            <div>
              <div>
                Toilet roll
              </div>
              <div className={styles.tpJokeBox}>
                <div className={(this.state.flush === FlushState.NoFlush) ? (
                  styles.tpJoke
                ) : (
                    styles.tpJoke + " " + styles.tpFlush
                  )}
                >
                  {this.nJoke}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
};

export default Jokes;
