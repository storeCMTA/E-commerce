const mongoose = require("mongoose")

const mongoURI = "mongodb://localhost:27017/GreenField";

mongoose.connect(mongoURI)
.then(() => {
  console.log("db connected");
}).catch((error) => {
  console.error("db connection error:", error);
}); 

const db = mongoose.connection;

module.exports = db; 