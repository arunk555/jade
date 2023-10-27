const express = require("express");
const path = require("path");
const app = express();
console.log(path.join(__dirname, "views"));
app.set("views", path.join(__dirname, "views"));
//app.set("views", "./views");
app.set("view engine", "jade");

app.get("/", function (req, res) {
  res.render("view", {
    option: "teachers",
    Students: ["Athul", "Ramij", "Nil", "Satyaki", "Souvik"],
    Teachers: ["Swarnali", "Paromita", "Poulomi", "sreejukta"],
  });
});

app.listen(8000, function () {
  console.log("Example app listening on port 8000!");
});

// set 'jade' as the 'view engine'
// render the jade template engine with the following data as parameter:
// option:"teachers" / "students",
// Students:["Athul", "Ramij", "Nil", "Satyaki", "Souvik"],
// Teachers :["Swarnali", "Paromita", "Poulomi", "sreejukta"]

// run the application on port 8000
