import React from 'react';

import styles from "./Contribute.module.scss";
import { ContributeReturn } from "../../globals/globalTypes";


import handle from "../../images/tHandle.png";

import {contributions} from "../../http/contributions";

// ToDo aria values for buttons and inputs
// ToDo sanitize inputs - allow non English characters though. Get rid of control characters
// ToDo silly messages when focus lost

const Contribute: React.FunctionComponent<{}> = () => {

  const [cName, cNameUpdate] = React.useState('');
  const handleNameChange = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const { value: newName } = event.target as HTMLInputElement;
    cNameUpdate(newName);
  }
  const [cSubject, cSubjectUpdate] = React.useState('');
  const handleSubjectChange = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const { value: newSubject } = event.target as HTMLInputElement;
    cSubjectUpdate(newSubject);
  }

  const [cMessage, cMessageUpdate] = React.useState('');
  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    event.preventDefault();
    const { value: newMessage } = event.target as HTMLTextAreaElement;
    cMessageUpdate(newMessage);
  }

  const [flushing, flushingUpdate] = React.useState(false);

  const handleClear = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    cMessageUpdate("");
    cSubjectUpdate("");
    cNameUpdate("");
  }

  
  // ToDo check that there are not multiple sends of same values
  const handleSend = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault(); 
    // event specific to the button or handle being clicked so don't need any event details
    // preventing default in case anything else attached to button
    
    // set flushing for animations
    flushingUpdate(true);

    contributions( cName, cSubject, cMessage)
      .then((result:ContributeReturn) => {
        if( result.succeed) {
          console.log("message successfully sent");
        } else {
          console.log("message send failed");
        }
        console.log("Message from lambda " + result.responseString);
        flushingUpdate(false);
      })
      .catch((errorResult: ContributeReturn)=> {
        // ouch. Something went wrong
        console.log("Message not sent, promise from Contribute failed");
        console.log("Returned " + errorResult.responseString);
      })
  }

  return (
    <div className={styles.page + " container-sm"}>
      <div className="row">
        <div className="col-12">
          <div className={styles.pageTitle}>
            Use this form to send me your complaints, jokes, amazing insights, cool web links, toilet paper (digital only), disgusting images,
            long essays or more complaints
          </div>
          <h4>If you send me anything, be careful because</h4>
          <p>
            It becomes mine !! Anything you send, the copyright becomes mine so that I can use it as I wish
          </p>
          <p>
            I don't guarantee to read it, reply (should you choose to send an email address), send money to any 
            Nigerian princes, put it on this website or do anything else with it. I may be busy, out standing in 
            line to buy toilet paper.
          </p>
        </div>
      </div>

      <div className={(flushing) ? (
          "row " + styles.tpForm + " " + styles.formFlush
        ) : (
          "row " + styles.tpForm
        )}>
        <div className="form col-12">
          <div>
            <div className={styles.nameBox + " form-group"}>
              <label htmlFor="contrName">Your name, nickname or whatever</label>
              <input
                className={"form-control " + styles.nameForm}
                id="contrName"
                type="text"
                name="contrName"
                size={25}
                value={cName}
                placeholder="Sir Monty of Dirty Bottom"
                onChange={handleNameChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contrSubject">What is this about ?</label>
              <input
                className={"form-control " + styles.subjectForm}
                id="contrSubject"
                type="text"
                name="contrSubject"
                value={cSubject}
                placeholder="Toilet paper isn't soft enough"
                onChange={handleSubjectChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contrMessage">Amazing stuff you want me to know, only accepts text, you will have to paste links to images</label>
              <textarea
                className={styles.messageForm + " form-control"}
                id="contrMessage"
                name="contrMessage"
                cols={40}
                rows={8}
                placeholder="I wish to file a complaint. Could I talk to your manager ?"
                value={cMessage}
                onChange={handleMessageChange}
              />
                
            </div>

          </div>
        </div>
      </div>

      <div className="row">
        <div className="form col-12">
          Submit button and handle, clear form, message box for returned message
          <br />
          <button className="btn my-btn-primary" onClick={handleSend}>Send</button>
          <button className="btn my-btn-primary" onClick={handleClear}>Clear everything</button>
          <br />
          <div className={styles.handleBox}>
            <img src={handle} alt="Toilet handle, flush me" onClick={handleSend}
              className={(flushing) ? (
                styles.tHandle + " " + styles.tHandleFlush
              ) : (
                  styles.tHandle 
                )}
            />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Contribute;