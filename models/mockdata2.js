const mongoose = require("mongoose");

var data2schema = new mongoose.Schema({
  full_name: {
    type: String,
  },
  email: {
    type: String,
  },
  team_name:{
    type: String
  }
});

module.exports = mongoose.model("MockData2", data2schema);
