const mongoose = require("mongoose");
const validator = require("validator");
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.db_con)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });