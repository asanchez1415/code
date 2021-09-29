const express = require("express");
const path = require("path");
const app = express();

// SETINGS
const port = 3000;
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

// ROUTES
app.use(require("./routes"));

// STATIC FILES
app.use(express.static(path.join(__dirname, "public")));

// LISTENING SERVER
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
