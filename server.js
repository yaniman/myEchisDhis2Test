var express = require("express"),
  app = express(),
  port = process.env.PORT || 3010;
var bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// ################## This is included to mock the response ##################
//var input = require("./input");
var output = require("./med.js");
// ################## ################## ################## ##################  ##################

// app.get("/", function (req, res) {
//   try {
//     res.json({
//       message: "Success Message",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

app.post("/",output.sendData);

app.listen(port);

console.log("Server running http://localhost:" + port);
