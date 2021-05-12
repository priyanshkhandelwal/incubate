const mongoose = require("mongoose");
const MockData2 = require("./mockdata2")

var data1schema = new mongoose.Schema({
  full_name: {
    type: String,
  },
  email: {
    type: String,
  },
  number: {
    type: Number
  },
  city:{
    type: String
  },
  url:{
    type: String,
    default: 'open'
  }
});

module.exports = mongoose.model("MockData1", data1schema);
