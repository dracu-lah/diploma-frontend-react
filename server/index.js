const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post("/api/results", (req, res) => {
  const savedData = req.body.result;
  console.log(savedData);
  res.send("result recieved");
});

app.get("/api/results", (req, res) => {
  const data = { name: "John Doe", age: 30 };
  res.send(data); 
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
