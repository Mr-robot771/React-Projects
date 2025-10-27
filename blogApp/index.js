const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/About", (req, res) => {
  res.sendFile(path.resolve(__dirname, "about.html"));
});

app.listen(5000, () => {
  console.log("App is listening at port 5000");
});
