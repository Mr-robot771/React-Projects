const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.json({
    message: "server running perfectly",
    timestamp: new Date().toISOString(),
    status: "success 200",
  });
});
app.listen(port, () => {
  console.log("server running succesfully 200....");
});
