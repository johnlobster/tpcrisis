//  communicates with lambda server that forwards messages

import axios from "axios";
import { ContributeReturn} from "../globals/globalTypes";

// boolean returned by resolve() is true if message succeeded
// contributions returns a promise

export const contributions: ( name:string, subject:string, message:string) 
  => Promise<ContributeReturn> = (name="", subject="", message="") => {
  
  console.log("Contributions received")
  console.log("Name:    " + name);
  console.log("Subject: " + subject);
  console.log("Message length " + message.length + " characters");
  console.log(message);
  console.log("--------------------------------------------------");
  console.log();

  // return new Promise(( resolve ) => {
  //   setTimeout( () => {
  //     resolve(true);
  //   }, 2000);
  // });

  // To do check input data. remove any escape characters etc., Check that all fields are present

  // read postAddress from environment variable
  const postAddress = process.env.TP_CONTRIBUTION_LAMBDA_ADDRESS || "http://localhost:3001";

  return new Promise((resolve, reject) => {
    console.log("Sending request to " + postAddress);
    axios.post(postAddress, {name: name, subject: subject, message: message})
      .then((response) => {
        if ((!response.data) || (!response.data.contributeReturn)) {
          // Although it returned, there wasn't any data 
          reject({succeed: false, responseString: "Somehow didn't like your information, maybe try again later ?"});
        } 
        else {
          if (response.data.contributeReturn === "No content") {
            // lambda server was sent bad data
            reject({ succeed: false, responseString: "Somehow couldn't send, maybe try again later ?" });

          }
          else if (response.data.contributeReturn === "Contribution failed"){
            // lambda server couldn't send email
            reject({ succeed: false, responseString: "This is not your day, maybe try again later ?" });
          }
          else if (response.data.contributeReturn === "Success") {
            // successful response from lambda, lambda able to send email
            resolve({ 
              succeed: true, 
              responseString: "Yippee ! Your message was sent, who knows what will happen next, maybe a free roll of toilet paper" });
          }
          else{
            // lambda server sent unknown text
            reject({ succeed: false, responseString: "It didn't like your contribution, maybe try again another time ?" });
          }
        }

      })
      .catch((error) => {
        if (error.response) {                                                                               
          // The request was made and the server responded with a status code                               
          // that falls out of the range of 2xx                                                             
          // 401 means that there was a problem registering that will return an error message  
          console.log("contributions: Error returned " + error.response.status);
          if (!error.response.status) {
            // error response, but no status, most strange
            reject({ succeed: false, responseString: "Something got confused, maybe try again later ?" });                                                            

          }        
          else if (error.response.status !== 200) {                                                                
            reject({ succeed: false, responseString: "Something broke, maybe try again later ?" });                                                            
          } 
          else {                                                                                              
            reject({ succeed: false, responseString: "Something weird happened, maybe try again another time ?"});                                            
          }                                                                                               
        }                                                                                                 
        else {                                                                                              
          // The request was made but no response was received 
          console.log("contributions: Timeout");                                             
          reject({ succeed: false, responseString: "Wasn't listening, maybe try again later ?" });                                           
        }                                                                                               
      });                                                                                             
  });                        
}