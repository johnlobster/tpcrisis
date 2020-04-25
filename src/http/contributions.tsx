//  communicates with lambda server that forwards messages

// boolean returned by resolve() is true if message succeeded
// contributions returns a promise, use a timeout for now
export const contributions: ( name:string, subject:string, message:string) 
  => Promise<boolean> = (name="", subject="", message="") => {
  console.log("Contributions received")
  console.log("Name:    " + name);
  console.log("Subject: " + subject);
  console.log("Message length " + message.length + " characters");
  console.log(message);
  console.log("--------------------------------------------------");
  console.log();

  return new Promise(( resolve ) => {
    setTimeout( () => {
      resolve(true);
    }, 2000);
  });
}