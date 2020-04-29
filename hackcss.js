const booty = document.getElementById("bootstrapStylesheet");
const reactCss = document.getElementById("reactStylesheet");
// could probably getElementByTag link and run through them, identifying "main\."
console.log("hack hack hack");
console.log(booty);
console.log(reactCss);
setTimeout( () => {
  booty.setAttribute("media", "all");
  reactCss.setAttribute("media", "all");
  console.log(booty);
  console.log(reactCss);
}, 500);

