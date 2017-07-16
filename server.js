const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.set("port", process.env.PORT || 3001);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const SUBMISSIONS = [];

app.get("/api/allSubmissions", (req, res) => {
  res.json({data: SUBMISSIONS});
});

app.post("/api/allSubmissions", (req, res) => {
  SUBMISSIONS.push(req.body);
  res.send('completed POST request');
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
