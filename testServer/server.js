// simple server used for testing json sent by tp website for contributions or donations

const PORT = process.env.PORT || 8080;

const express = require("express");

// Initialize Express
let app = express();

// set up express middleware


// body parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// public is a static folder. Probably don't need this
app.use(express.static("public"));

app.get("*", function (req, res) {
  
  res.json("Server response, no issues");
});

// set up routes (order is important)
require("./routes/api-routes")(app, db);
require("./routes/html-routes")(app, db);

// Start the server
app.listen(PORT, function () {
  console.log("Simple server initialized and listening on port " + PORT);
});
