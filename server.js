const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { json, urlencoded } = bodyParser;
const data = require("./routes/data");

app.use(json());
app.use(urlencoded({ extended: false }));

process.on("uncaughtException", function(err) {
  console.error(err); // handle the error safely
});

app.use("/data", data);

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
