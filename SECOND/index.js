const express = require("express");

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello Node and Express");
  console.log("Server Started");
});

app.listen(port, () => {
  console.log("Server is ruinning");
});
