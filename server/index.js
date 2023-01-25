const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const db = require("./db/db");

app.use(cors());
app.use(express.json());

app.use("/", require("./routes/route"));

app.listen(port, () => {
  console.log(`connection is successful at ${port}`);
});
