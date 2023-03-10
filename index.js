const express = require("express");
const app = express();

const port = process.env.PORT || 5000;
const cors = require("cors");
require('dotenv').config();
const db = require("./db/db");
const path = require('path');
const route = require("./routes/route");


app.use(cors());
app.use(express.json());

app.use("/api", route);

if (process.env.NODE_ENV === "production") {
  console.log("In production stage");
  app.use(express.static(path.resolve(__dirname, "client", "build")))
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}


app.listen(port, () => {
  console.log(`connection is successful at ${port}`);
});

