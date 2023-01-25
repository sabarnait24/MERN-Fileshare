const mongoose = require("mongoose");
const validator = require("validator");
mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost:27017/sharefile")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("Not connected");
  });